export const NODE_ENV = process.env.NODE_ENV ?? "production";
export const EXT = NODE_ENV == "development" ? "DEV" : "PRO";
export const ENV = NODE_ENV == "development" ? "dev" : "pro";
