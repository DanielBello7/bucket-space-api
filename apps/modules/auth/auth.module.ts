import { DataSource } from "typeorm";
import { OtpModule } from "../otp/otp.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AccountModule } from "../accounts/accounts.module";
import { JwtModule } from "@/libs";
import { ACTIVE } from "@/config";
import { BrevoModule } from "@/libs/brevo";
import { RefreshModule } from "../refresh";

export class AuthModule {
	static instance: AuthModule;
	public controller: AuthController;
	public service: AuthService;

	constructor(datasource: DataSource) {
		const otp = new OtpModule(datasource);
		const refresh = new RefreshModule(datasource);
		const accounts = new AccountModule(datasource);
		const jwt = new JwtModule(ACTIVE.JWT_SECRET, "24h");
		const email = new BrevoModule({
			apikey: ACTIVE.EMAIL_API_KEY,
			email: ACTIVE.APP_EMAIL,
			email_name: ACTIVE.APP_EMAIL_NAME,
		});
		this.service = new AuthService(
			otp.otpService,
			accounts.service,
			jwt.service,
			email.service,
			refresh.service
		);
		this.controller = new AuthController(this.service);
		if (AuthModule.instance) {
			return AuthModule.instance;
		} else {
			AuthModule.instance = this;
		}
	}
}
