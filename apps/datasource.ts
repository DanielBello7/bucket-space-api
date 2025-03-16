import { DataSource } from 'typeorm';
import { Account } from './modules/accounts/entities/account.entity';
import * as CONFIG from './config';

export const database = new DataSource({
    type: 'sqlite',
    database: CONFIG.ACTIVE.DATABASE_URI,
    synchronize: true,
    logging: false,
    entities: [Account],
    subscribers: [],
    migrations: [],
});
