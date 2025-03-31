import { Request, Response, NextFunction } from 'express';
import { LikeService } from './likes.service';

export class LikesController {
    constructor(private readonly likes: LikeService) {}

    getPostLikes = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const response = await this.likes.getPostLikes(id);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };

    getPostLikesCount = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const response = await this.likes.countPostLikes(id);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };

    likePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const response = await this.likes.likePost(body);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };

    dislikePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const response = await this.likes.remove(id);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };

    getAccLikes = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const response = await this.likes.getAccountLikes(id);
            res.json(response);
        } catch (e) {
            next(e);
        }
    };
}
