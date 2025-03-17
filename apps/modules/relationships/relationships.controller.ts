import { Request, Response, NextFunction } from 'express';
import { RelationshipService } from './relationships.service';

export class RelationshipController {
    constructor(private readonly relationships: RelationshipService) {}

    getUserFollowers = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const response = await this.relationships.findUserFollowers(id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    getUserFollowing = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const response = await this.relationships.findUserFollowing(id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    numUserFollowers = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const response = await this.relationships.countUserFollowers(id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    numUserFollowing = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const response = await this.relationships.countUserFollowing(id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    followAccount = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const response = await this.relationships.save(body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    unfollowAccount = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const response = await this.relationships.delete(id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    findCounterPart = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const response = await this.relationships.findCounterPart(id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };
}
