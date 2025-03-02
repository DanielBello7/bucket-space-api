import { CONSTANT } from './typ.constant';
import path from 'path';

export const DEV_CONSTANT: CONSTANT = {
    DATABASE_URI: path.resolve(
        __dirname,
        path.join('..', '..', '..', 'sqls', `bucket.dev.db`)
    ),
    JWT_SECRET: 'secret',
    NODE_ENV: 'development',
    PORT: 3000,
    SALT: 10,
    SERVICE: 'BUCKET',
    SESSION_SECRET: 'secret',
    EXPIRES_IN: '12h',
};
