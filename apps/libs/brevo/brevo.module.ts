import { BrevoService } from "./brevo.service";

export type BrevoConfig = {
	apikey: string;
	email_name: string;
	email: string;
};
export class BrevoModule {
	private email_name: string;
	private api_key: string;
	private email: string;

	public service: BrevoService;

	constructor(data: BrevoConfig) {
		this.email_name = data.email_name;
		this.api_key = data.apikey;
		this.email = data.email;

		this.service = new BrevoService({
			apikey: this.api_key,
			email: this.email,
			email_name: this.email_name,
		});
	}
}
