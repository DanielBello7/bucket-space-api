import { Request, Response, NextFunction } from "express";
import { FeedService } from "./feed.service";
import { AuthUser } from "../auth";

export class FeedController {
	constructor(private readonly feeds: FeedService) {}

	get_user_feed(req: Request, res: Response, nxt: NextFunction) {
		try {
			const user = req.user as AuthUser;
			const query: Record<string, any> = req.query;
			const response = this.feeds.get_acc_posts_feed(user.id, query);
			res.json(response);
		} catch (e) {
			nxt(e);
		}
	}

	get_feed(req: Request, res: Response, nxt: NextFunction) {
		try {
			const query: Record<string, any> = req.query;
			const response = this.feeds.get_generic_post_feed(query);
			res.json(response);
		} catch (e) {
			nxt(e);
		}
	}
}
