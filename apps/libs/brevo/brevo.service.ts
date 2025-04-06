import {
	HtmlParams,
	IEmailConfig,
	OtpParams,
	TextParams,
	WelcomeParams,
} from "@/interfaces";
import { BrevoConfig } from "./brevo.module";
import { otp_email } from "./emails/otp.email";
import { welcome_email } from "./emails/welcome.email";

const EmailAPI = require("sib-api-v3-sdk");

export class BrevoService extends IEmailConfig {
	private smtp: any;
	private mail!: string;
	private name!: string;

	constructor(body: BrevoConfig) {
		super();
		const client = EmailAPI.ApiClient.instance;
		const apiKeyObject = client.authentications["api-key"];
		apiKeyObject.apiKey = body.apikey;
		this.smtp = new EmailAPI.TransactionalEmailsApi();
		this.mail = body.email;
		this.name = body.email_name;
	}

	send_text_email = async (body: TextParams): Promise<void> => {
		const { toEmail, subject, message } = body;
		const response = await this.smtp.sendTransacEmail({
			sender: { email: this.mail, name: this.name },
			to: [{ email: toEmail }],
			subject: subject,
			textContent: message,
			htmlContent: undefined,
			params: undefined,
		});
		return response;
	};

	send_html_email = async (body: HtmlParams): Promise<void> => {
		const { toEmail, subject, htmlBdy } = body;
		const response = await this.smtp.sendTransacEmail({
			sender: { email: this.mail, name: this.name },
			to: [{ email: toEmail }],
			subject: subject,
			htmlContent: htmlBdy,
			textContent: undefined,
			params: undefined,
		});
		return response;
	};

	send_otp_mail = async (body: OtpParams): Promise<void> => {
		const { otpTokn, subject, toEmail } = body;
		await this.smtp.sendTransacEmail({
			sender: { email: this.mail, name: this.name },
			to: [{ email: toEmail }],
			subject: subject ?? "Your OTP Code",
			htmlContent: otp_email(otpTokn, toEmail),
			textContent: `Your OTP Code is: ${otpTokn}`,
			params: undefined,
		});
	};

	send_welcome_mail = async (body: WelcomeParams): Promise<void> => {
		const { name, subject, toEmail } = body;
		await this.smtp.sendTransacEmail({
			sender: { email: this.mail, name: this.name },
			to: [{ email: toEmail }],
			subject: subject ?? "Welcome to Our Service!",
			htmlContent: welcome_email(name, toEmail),
			textContent: `Hi ${name},\n\nWelcome to our service! We're excited to have you on board.\n\nBest regards,\n${this.name}`,
			params: undefined,
		});
	};
}
