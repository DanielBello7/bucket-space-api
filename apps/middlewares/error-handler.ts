import { Request, Response, NextFunction } from "express";
import { logger } from "@/config/logger/winston.logger";
import { AppError } from "@/errors/app-error.error";
import { ValidationError } from "@/errors/validation-error.error";

export const errorHandler = (
	error: unknown,
	req: Request,
	res: Response,
	nxt: NextFunction
) => {
	let statusCode: number;
	let msg: string;
	let title: string;
	let errors: string[] = [];

	console.log("----error", error);

	if (error instanceof ValidationError) {
		msg = error.msg;
		statusCode = error.statusCode;
		title = error.title;
		errors = error.errors.flatMap((error) =>
			Object.values(error.constraints ?? {})
		);
	} else if (error instanceof AppError) {
		msg = error.msg;
		statusCode = error.statusCode;
		title = error.title;
	} else {
		title = "Internal Server Error";
		msg = "Error Occured";
		statusCode = 500;
	}
	logger.error(`${title}, ${msg}`);
	res.status(statusCode).json({ title, msg, status: statusCode, errors });
};
