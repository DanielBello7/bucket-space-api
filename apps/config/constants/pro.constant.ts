import { CONSTANT } from './typ.constant';
import path from 'path';

export const PRO_CONSTANT: CONSTANT = {
    DATABASE_URI: path.resolve(__dirname, '../../../../sqls', `bucket.pro.db`),
    JWT_SECRET: 'secret',
    NODE_ENV: 'production',
    DATABASE: 'bucket.pro.db',
    DATABASE_DIR: path.resolve(__dirname, '../../../../sqls'),
    PORT: 3000,
    SALT: 20,
    SERVICE: 'BUCKET',
    SESSION_SECRET: 'secret',
    EXPIRES_IN: '24h',
};
