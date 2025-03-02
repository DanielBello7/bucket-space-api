import { HttpError } from './http-error.error';
import httpStatus from 'http-status';

export class NotFoundError extends HttpError {
    constructor(
        msg: string = 'The requested resource was not found',
        ctx: string = 'error context'
    ) {
        super(msg, ctx);
        this.title = 'NotFoundError';
        this.name = 'NotFoundError';
        this.status = httpStatus.NOT_FOUND;
    }
}
