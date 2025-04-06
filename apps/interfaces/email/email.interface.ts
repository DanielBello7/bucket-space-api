export type TextParams = {
	toEmail: string;
	subject: string;
	message: string;
};

export type HtmlParams = {
	toEmail: string;
	subject: string;
	htmlBdy: string;
};

export type OtpParams = {
	toEmail: string;
	subject?: string;
	otpTokn: string;
};

export type WelcomeParams = {
	toEmail: string;
	subject: string;
	name: string;
};

export abstract class IEmailConfig {
	abstract send_text_email: (body: TextParams) => Promise<void>;
	abstract send_html_email: (body: HtmlParams) => Promise<void>;
	abstract send_otp_mail: (body: OtpParams) => Promise<void>;
	abstract send_welcome_mail: (body: WelcomeParams) => Promise<void>;
}
