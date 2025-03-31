import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import { InternalServerError } from "@/errors/internal-server-error.error";
import { ValidationError } from "@/errors/validation-error.error";

/** this function takes in a dto and uses it to evaluate a request */
/** if any of the challenges are failed it then passes the error to the next middleware */
export const parseBodyPipe = (dto: new (...args: any[]) => object) => {
	return (req: Request, _res: Response, next: NextFunction) => {
		const validator = new dto();
		Object.assign(validator, req.body);

		validate(validator)
			.then((errors) => {
				if (errors.length > 0) {
					next(
						new ValidationError(
							errors,
							`Error occured during ${dto.name} validation`
						)
					);
				} else {
					next();
				}
			})
			.catch((error) => {
				next(new InternalServerError("Error occured during validation", error));
			});
	};
};
