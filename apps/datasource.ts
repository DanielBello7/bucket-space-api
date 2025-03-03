import { DataSource } from 'typeorm';
import { Account } from './modules/accounts/entities/account.entity';

export const database = new DataSource({
    type: 'sqlite',
    database: 'bucket',
    synchronize: true,
    logging: false,
    entities: [Account],
    subscribers: [],
    migrations: [],
});
