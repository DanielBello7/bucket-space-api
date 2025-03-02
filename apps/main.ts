require('reflect-metadata');
require('module-alias');
require('./config/env/env.config')();

import { database } from './datasource';
import slowDown from 'express-slow-down';
import * as CONFIG from './config';
import uuid from 'uuid';
import express from 'express';
import limiter from 'express-rate-limit';
import cors from 'cors';
import cookie from 'cookie-parser';
import compression from 'compression';
import session from 'express-session';
import routes from './routes';

const Store = require('connect-sqlite3')(session);

const app = express();

app.use(compression());

app.use(
    cors({
        credentials: true,
        origin: ['*'],
    })
);

app.use(cookie());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    limiter({
        windowMs: 15 * 60 * 1000,
        limit: 100,
        standardHeaders: 'draft-8',
        legacyHeaders: false,
    })
);

app.use(
    slowDown({
        windowMs: 15 * 60 * 1000,
        delayAfter: 5,
        delayMs: (hits) => hits * 100,
    })
);

app.use(
    session({
        secret: CONFIG.ACTIVE.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60 * 60 * 60 * 24 },
        genid: () => uuid.v4(),
        store: new Store({
            db: 'bucket',
            dir: CONFIG.ACTIVE.DATABASE_URI,
        }),
    })
);

app.use(routes);

database
    .initialize()
    .then(() => {
        app.listen(CONFIG.ACTIVE.PORT, () => {
            CONFIG.LOGGER.info(
                `server running on http://localhost:${CONFIG.ACTIVE.PORT}`
            );
        });
    })
    .catch((error) => {
        CONFIG.LOGGER.error(error);
    });
