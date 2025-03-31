import { Request, Response, NextFunction } from "express";
import { ShareService } from "./shares.service";

export class SharesController {
	constructor(private readonly shares: ShareService) {}

	getUserShares = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.params.id;
			const response = await this.shares.getUserShares(id);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	countUserShares = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.params.id;
			const response = await this.shares.countUserShares(id);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	getShares = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const query = req.query;
			const response = await this.shares.get(query);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	findShared = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.params.id;
			const response = await this.shares.findById(id);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	sharePost = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const body = req.body;
			const response = await this.shares.save(body);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	unSharePost = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.params.id;
			const response = await this.shares.remove(id);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};

	updateSharedPost = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const id = req.params.id;
			const body = req.body;
			const response = await this.shares.modify(id, body);
			res.json(response);
		} catch (error) {
			next(error);
		}
	};
}
