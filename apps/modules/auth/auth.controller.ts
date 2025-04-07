import { Request, Response, NextFunction } from "express";
import { AuthService, AuthUser } from "./auth.service";
import { LoginDto } from "./dto/login-email.dto";
import { RefreshDto } from "./dto/refresh.dto";

export class AuthController {
	constructor(private readonly auth: AuthService) {}

	sign_in = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const body: LoginDto = req.body;
			const response = await this.auth.sign_in(body);
			if (!response) {
				res.json({
					msg: "email sucecssfully",
				});
				return;
			} else {
				(req.session as any).token = response.token;
				(req.session as any).refsh = response.refresh;
				res.json(response.payload);
			}
		} catch (error) {
			next(error);
		}
	};

	me = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = req.user as AuthUser;
			res.json(user);
		} catch (error) {
			next(error);
		}
	};

	logout = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = (req.user as any).id;
			req.session.destroy((err) => {
				if (err) next(err);
				else {
					this.auth.sign_out(id);
					res.end();
				}
			});
		} catch (error) {
			next(error);
		}
	};

	refresh = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const body: RefreshDto = req.body;
			const response = await this.auth.generate_refresh(body.refresh);
			(req.session as any).token = response.token;
			(req.session as any).refsh = response.refresh;
			res.json(response);
		} catch (error) {
			next(error);
		}
	};
}
