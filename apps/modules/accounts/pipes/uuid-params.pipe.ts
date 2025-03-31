import { BadRequestError } from '@/errors/bad-request-error.error';
import { isUUID } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export const uuidParamPipe = (param: string) => {
    return (req: Request, res: Response, nxt: NextFunction) => {
        const id = req.params[param];
        const check = isUUID(id);
        if (!check) {
            throw new BadRequestError(`${param} not valid UUID`);
        }
        return nxt();
    };
};
