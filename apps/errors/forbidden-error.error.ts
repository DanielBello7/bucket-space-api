import httpStatus from "http-status";
import { AppError } from "./app-error.error";

export class ForbiddenError extends AppError {
	constructor(
		msg: string = "Accessed resource is forbidden",
		ctx: string = "error context"
	) {
		super(msg, ctx);
		this.statusCode = httpStatus.FORBIDDEN;
		this.title = "ForbiddenError";
		Object.setPrototypeOf(this, ForbiddenError.prototype);
	}
}
