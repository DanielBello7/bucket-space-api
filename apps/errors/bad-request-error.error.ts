import httpStatus from 'http-status';
import { HttpError } from './http-error.error';

export class BadRequestError extends HttpError {
    constructor(
        msg: string = 'A bad request has been made by the user',
        ctx: string = 'error context'
    ) {
        super(msg, ctx);
        this.name = 'BadRequestError';
        this.status = httpStatus.BAD_REQUEST;
        this.title = 'BadRequestError';
    }
}
