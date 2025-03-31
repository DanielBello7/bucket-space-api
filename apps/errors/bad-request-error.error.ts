import httpStatus from 'http-status';
import { AppError } from './app-error.error';

export class BadRequestError extends AppError {
    constructor(
        msg: string = 'A bad request has been made by the user',
        ctx: string = 'error context'
    ) {
        super(msg, ctx);
        this.statusCode = httpStatus.BAD_REQUEST;
        this.title = 'BadRequestError';
    }
}
