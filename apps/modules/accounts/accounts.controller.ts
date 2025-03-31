import { NextFunction, Request, Response } from 'express';
import { AccountService } from './accounts.service';

export class AccountController {
    constructor(private readonly accounts: AccountService) {}

    find = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const response = await this.accounts.findById(id);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.accounts.register(req.body);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const query = req.query;
            const response = await this.accounts.get(query);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const id = req.params.id;
            const response = await this.accounts.modify(id, body);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };

    remove = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const response = await this.accounts.remove(id);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };
}
