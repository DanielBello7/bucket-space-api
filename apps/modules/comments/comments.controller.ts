import { Request, Response, NextFunction } from 'express';
import { CommentService } from './comments.service';

export class CommentsController {
    constructor(private readonly comments: CommentService) {}

    getPostComments = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const response = await this.comments.getCommentsForPost(
                req.params.id
            );
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    getPostCommentsCount = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const response = await this.comments.countPostComments(
                req.params.id
            );
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    findComment = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.comments.findById(req.params.id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    makeComment = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.comments.create(req.body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    deleteComment = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.comments.remove(req.params.id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };
}
