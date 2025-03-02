import httpStatus from 'http-status';

export class BadRequestError extends Error {
    public sts: number = httpStatus.BAD_REQUEST;
    public msg: string;
    public ctx: string;

    constructor(msg?: string, ctx?: string) {
        super(msg);
        this.msg = msg ?? 'A bad request has been made by the user';
        this.ctx = ctx ?? 'error context';
    }
}
