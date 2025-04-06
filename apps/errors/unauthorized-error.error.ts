import httpStatus from "http-status";
import { AppError } from "./app-error.error";

export class UnauthorizedError extends AppError {
	constructor(
		msg: string = "An unauthorized request has been made",
		ctx: string = "error context"
	) {
		super(msg, ctx);
		this.statusCode = httpStatus.UNAUTHORIZED;
		this.title = "UnauthorizedError";
		Object.setPrototypeOf(this, UnauthorizedError.prototype);
	}
}
