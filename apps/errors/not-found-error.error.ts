import httpStatus from 'http-status';

export class NotFoundError extends Error {
    public sts: number = httpStatus.NOT_FOUND;
    public ctx: string;
    public msg: string;
    public ttl = 'NotFoundError';

    constructor(msg?: string, ctx?: string) {
        super(msg ?? 'The requested resource was not found');
        this.msg = msg ?? 'The requested resource was not found';
        this.ctx = ctx ?? 'context status';
    }
}
