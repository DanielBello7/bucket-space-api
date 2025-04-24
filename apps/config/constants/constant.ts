import { CONSTANT } from "./typ.constant";
import dotenv from "dotenv";

dotenv.config({ path: process.env.ENV_FILE as string });

export const CONSTANTS: CONSTANT = {
	DATABASE: (process.env.DATABASE as string) ?? "",
	DATABASE_URI: (process.env.DATABASE_URI as string) ?? "",
	DATABASE_DIR: (process.env.DATABASE_DIR as string) ?? "",
	JWT_SECRET: (process.env.JWT_SECRET as string) ?? "",
	NODE_ENV: (process.env.NODE_ENV as any) ?? "",
	PORT: !Number.isNaN(parseInt(process.env.PORT as string))
		? parseInt(process.env.PORT as string)
		: 3000,
	SALT: !Number.isNaN(parseInt(process.env.SALT as string))
		? parseInt(process.env.SALT as string)
		: 10,
	SERVICE: (process.env.SERVICE as string) ?? "",
	SESSION_SECRET: (process.env.SESSION_SECRET as string) ?? "",
	EXPIRES_IN: (process.env.EXPIRES_IN as string) ?? "",
	EMAIL_API_KEY: (process.env.EMAIL_API_KEY as string) ?? "",
	APP_EMAIL: (process.env.APP_EMAIL as string) ?? "",
	APP_EMAIL_NAME: (process.env.APP_EMAIL_NAME as string) ?? "",
	ENV_FILE: (process.env.ENV_FILE as string) ?? "",
	LOG_PATH: (process.env.LOG_PATH as string) ?? "",
	CORS: (process.env.CORS as string) ?? "",
};
