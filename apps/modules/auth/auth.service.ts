import { AccountService } from "../accounts/accounts.service";
import { OtpService } from "../otp/otp.service";
import { LoginDto } from "./dto/login-email.dto";
import { isPast, addHours } from "date-fns";
import { UnauthorizedError } from "@/errors/unauthorized-error.error";
import { JwtService } from "@/libs/jwt/jwt.service";
import { IEmailConfig } from "@/interfaces";
import { Otp } from "../otp/types/otp.type";
import otp_generator from "otp-generator";
import { RefreshService } from "../refresh";

export type AuthUser = {
	id: string;
	email: string;
	name: string;
};

type SignInResponse = {
	token: string;
	refresh: string;
	payload: AuthUser;
};

export class AuthService {
	constructor(
		private readonly otp: OtpService,
		private readonly accounts: AccountService,
		private readonly jwt: JwtService,
		private readonly email: IEmailConfig,
		private readonly refresh: RefreshService
	) {}

	/** sign in function */
	async sign_in(body: LoginDto) {
		if (body.otp) {
			return this.authenticate(body.otp, body.email);
		} else {
			return this.generate(body.email);
		}
	}

	/** this removes many otp by a user from the database */
	async cleanup_otp(email: string) {
		return this.otp.removeMany({ email });
	}

	/** this sends an email to the appropriate account */
	async generate(email: string) {
		await this.accounts.findByEmail(email);
		const previous_tokens = await this.otp.get({ email });
		const valid = previous_tokens.find((token) => !isPast(token.expiresAt));
		let token: Otp;
		if (valid) {
			token = valid;
			await this.otp.removeByIds(
				previous_tokens
					.map((token) => token.id)
					.filter((token) => token !== valid.id)
			);
		} else {
			await this.cleanup_otp(email);
			token = await this.otp.create({
				email,
				expiresAt: addHours(new Date(), 2),
				token: otp_generator.generate(6, {
					digits: true,
					lowerCaseAlphabets: false,
					specialChars: false,
					upperCaseAlphabets: false,
				}),
			});
		}

		await this.email.send_otp_mail({
			otpTokn: token.token,
			toEmail: email,
			subject: "Your OTP Code, Please do not disclose this to anyone",
		});
		return null;
	}

	/** this generates a valid token and refresh */
	async authorize(payload: AuthUser) {
		const valid = this.jwt.sign(payload);
		const refresh = this.jwt.sign(payload, { expiresIn: "48h" });
		await this.refresh.create({
			account: payload.id,
			refresh,
		});
		return {
			token: valid,
			refresh,
			payload,
		};
	}

	/** this confirms the user is valid using the otp and the email */
	async authenticate(otp: string, email: string): Promise<SignInResponse> {
		const account = await this.accounts.findByEmail(email);
		const token = await this.otp.findByToken(otp);
		if (token.email !== email) {
			throw new UnauthorizedError("invalid credentials");
		}
		if (isPast(new Date(token.expiresAt).getTime())) {
			throw new UnauthorizedError("token is expired");
		}
		await this.cleanup_otp(email);
		const payload: AuthUser = {
			id: account.id,
			email: account.email,
			name: account.name,
		};
		return this.authorize(payload);
	}

	/** id represents user account id */
	async sign_out(id: string) {
		await this.refresh.removeMany({ account: id });
	}

	/** this generates a new referesh token and a new valid session token for the user */
	async generate_refresh(refresh: string) {
		try {
			const find = await this.refresh.findByRefresh(refresh);
			const account = await this.accounts.findById(find.account);
			await this.refresh.remove(find.id);
			const payload: AuthUser = {
				email: account.email,
				id: account.id,
				name: account.name,
			};
			return this.authorize(payload);
		} catch {
			throw new UnauthorizedError();
		}
	}
}
