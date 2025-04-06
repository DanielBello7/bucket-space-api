import jwt from "jsonwebtoken";

export class JwtService {
	constructor(
		private readonly secret: string,
		private readonly exprAt: jwt.SignOptions["expiresIn"]
	) {}

	sign(
		payload: string | Buffer | object,
		options: jwt.SignOptions = {
			expiresIn: this.exprAt,
		}
	): string {
		return jwt.sign(payload, this.secret, options);
	}

	decode(token: string, options: jwt.DecodeOptions & { complete: true }) {
		return jwt.decode(token, options);
	}

	verify(
		token: string,
		options?: jwt.VerifyOptions & {
			complete?: false;
		}
	): jwt.JwtPayload | string {
		return jwt.verify(token, this.secret, options);
	}
}
