export type ENV_TYPE = 'production' | 'development';
export type EXT_TYPE = 'pro' | 'dev';

export type CONSTANT = {
    NODE_ENV: ENV_TYPE;
    SERVICE: string;
    DATABASE_DIR: string;
    DATABASE_URI: string;
    DATABASE: string;
    SALT: number;
    PORT: number;
    SESSION_SECRET: string;
    JWT_SECRET: string;
    EXPIRES_IN: string;
};
