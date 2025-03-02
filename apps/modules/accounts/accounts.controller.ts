import { NextFunction, Request, Response } from 'express';
import * as AccountService from './accounts.service';

const findAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const response = await AccountService.findAccountUsingId(id);
        res.json(response);
    } catch (e) {
        next(e);
    }
};

const createAccount = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await AccountService.registerAccount(req.body);
        res.json(response);
    } catch (e) {
        next(e);
    }
};

const getAccounts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = req.query;
        const response = await AccountService.getAccounts(query);
        res.json(response);
    } catch (e) {
        next(e);
    }
};

const updateAccount = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const response = await AccountService.updateAccountUsingId(id, body);
        res.json(response);
    } catch (e) {
        next(e);
    }
};

const deleteAccount = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;
        const response = await AccountService.remove(id);
        res.json(response);
    } catch (e) {
        next(e);
    }
};

export {
    createAccount,
    getAccounts,
    findAccount,
    updateAccount,
    deleteAccount,
};
