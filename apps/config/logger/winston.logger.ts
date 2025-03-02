import winston from 'winston';
import path from 'path';

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
    ),
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            format: winston.format.json(),
            level: 'info',
            dirname: path.resolve(
                __dirname,
                path.join('..', '..', '..', 'logs')
            ),
            maxsize: 10240 * 10240,
        }),
    ],
});
