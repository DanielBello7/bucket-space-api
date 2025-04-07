import { ACTIVE } from "@/config";
import { UnauthorizedError } from "@/errors/unauthorized-error.error";
import { JwtModule } from "@/libs";
import { Request, Response, NextFunction } from "express";

export function session_guard(req: Request, _res: Response, nxt: NextFunction) {
	const token = (req.session as any).token;
	const jwt = new JwtModule(ACTIVE.JWT_SECRET, "24h");

	if (!token) {
		throw new UnauthorizedError();
	}

	try {
		const user = jwt.service.verify(token);
		req.user = user;
		nxt();
	} catch {
		throw new UnauthorizedError();
	}
}
