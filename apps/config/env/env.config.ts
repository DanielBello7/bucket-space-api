import dotenv from "dotenv";
import path from "path";

export const NODE_ENV = process.env.NODE_ENV ?? "production";
export const EXT = NODE_ENV == "development" ? "DEV" : "PRO";
export const ENV = NODE_ENV == "development" ? "dev" : "pro";

export const envLocation = path.resolve(
	__dirname,
	path.join("..", "..", "..", "envs", `.env.${ENV}`)
);

const configure = () => {
	dotenv.config({
		path: envLocation,
	});
};

configure();

export default configure;
