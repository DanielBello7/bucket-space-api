import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
	constructor(private readonly auth: AuthService) {}

	signIn = async (req: Request, res: Response, next: NextFunction) => {
		try {
		} catch (error) {
			next(error);
		}
	};

	me = async (req: Request, res: Response, next: NextFunction) => {
		try {
		} catch (error) {
			next(error);
		}
	};

	logout = async (req: Request, res: Response, next: NextFunction) => {
		try {
		} catch (error) {
			next(error);
		}
	};

	refresh = async (req: Request, res: Response, next: NextFunction) => {
		try {
		} catch (error) {
			next(error);
		}
	};
}
