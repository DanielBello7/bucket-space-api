import httpStatus from 'http-status';

export class HttpError extends Error {
    public status: number = httpStatus.INTERNAL_SERVER_ERROR;
    public message: string;
    public context: string;
    public title: string;

    constructor(
        msg: string = 'An error occured',
        ctx: string = 'error context'
    ) {
        super(msg);
        this.context = ctx;
        this.message = msg;
        this.stack = ctx;
        this.name = 'HttpError';
        this.title = 'HttpError';
    }
}
