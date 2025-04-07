import { CONSTANT } from "./typ.constant";
import path from "path";

export const DEV_CONSTANT: CONSTANT = {
	DATABASE: (process.env.DATABASE as string) ?? "",
	DATABASE_URI: path.resolve(
		__dirname,
		path.join("..", "..", "..", "sqls", `bucket.dev.db`)
	),
	DATABASE_DIR: path.resolve(__dirname, path.join("..", "..", "..", "sqls")),
	JWT_SECRET: (process.env.JWT_SECRET as string) ?? "",
	NODE_ENV: "development",
	PORT: parseInt(process.env.PORT as string) ?? 3000,
	SALT: parseInt(process.env.SALT as string) ?? 10,
	SERVICE: (process.env.SERVICE as string) ?? "",
	SESSION_SECRET: (process.env.SESSION_SECRET as string) ?? "",
	EXPIRES_IN: (process.env.EXPIRES_IN as string) ?? "",
	EMAIL_API_KEY: (process.env.EMAIL_API_KEY as string) ?? "",
	APP_EMAIL: (process.env.APP_EMAIL as string) ?? "",
	APP_EMAIL_NAME: (process.env.APP_EMAIL_NAME as string) ?? "",
};
