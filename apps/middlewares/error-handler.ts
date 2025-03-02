import { Request, Response, NextFunction } from 'express';
import { logger } from '@/config/logger/winston.logger';
import { HttpError } from '@/errors/http-error.error';

export const errorHandler = (
    error: unknown,
    req: Request,
    res: Response,
    nxt: NextFunction
) => {
    let statusCode: number;
    let msg: string;

    if (error instanceof HttpError) {
        msg = error.message;
        statusCode = error.status;
    } else {
        msg = 'Internal Error';
        statusCode = 500;
    }
    logger.error('Error occured:', msg, error);
    res.status(statusCode).json({ msg, status: statusCode });
};
