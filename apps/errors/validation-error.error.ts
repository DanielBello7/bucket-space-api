import httpStatus from 'http-status';
import { AppError } from './app-error.error';
import { ValidationError as ValidationErrors } from 'class-validator';

export class ValidationError extends AppError {
    public errors: ValidationErrors[] = [];
    constructor(
        errors: ValidationErrors[] = [],
        msg: string = 'An error with validation has occured',
        ctx: string = 'error context'
    ) {
        super(msg, ctx);
        this.statusCode = httpStatus.BAD_REQUEST;
        this.title = 'ValidationError';
        this.errors = errors;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
