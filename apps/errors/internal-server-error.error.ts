import httpStatus from 'http-status';
import { AppError } from './app-error.error';

export class InternalServerError extends AppError {
    constructor(
        msg: string = 'Internal Server Error',
        ctx: string = 'error context'
    ) {
        super(msg, ctx);
        this.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        this.title = 'InternalServerError';
    }
}
