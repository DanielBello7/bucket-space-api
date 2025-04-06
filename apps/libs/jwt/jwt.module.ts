import { JwtService } from "./jwt.service";
import jwt from "jsonwebtoken";

export class JwtModule {
	public service: JwtService;
	private duration: jwt.SignOptions["expiresIn"];
	private secret: string;

	constructor(secret: string, duration: jwt.SignOptions["expiresIn"]) {
		this.secret = secret;
		this.duration = duration;
		this.service = new JwtService(this.secret, this.duration);
	}
}
