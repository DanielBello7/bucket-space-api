import { AppError } from "./app-error.error";
import httpStatus from "http-status";

export class NotFoundError extends AppError {
	constructor(
		msg: string = "The requested resource was not found",
		ctx: string = "error context"
	) {
		super(msg, ctx);
		this.title = "NotFoundError";
		this.statusCode = httpStatus.NOT_FOUND;
	}
}
