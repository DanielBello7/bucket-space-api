import { Request, Response, NextFunction } from "express";
import { PostService } from "./posts.service";

export class PostController {
	constructor(private readonly posts: PostService) {}

	getPosts = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const query = req.query;
			const response = await this.posts.get(query);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	findPost = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.params.id;
			const response = await this.posts.findById(id);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	savePost = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const body = req.body;
			const files = (req.files as Express.Multer.File[]) ?? [];
			const response = await this.posts.save(body, files);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	removePost = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.params.id;
			const response = await this.posts.remove(id);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	getUserPosts = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.params.id;
			const response = await this.posts.getAccountPosts(id);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	countUserPosts = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.params.id;
			const response = await this.posts.getAccPostCount(id);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};
}
