import { DataSource, QueryRunner } from 'typeorm';

export class TransactionsModule {
    constructor(private readonly datasource: DataSource) {}

    async execute(cb: (transaction: QueryRunner) => Promise<any>) {
        const transaction = this.datasource.createQueryRunner();

        await transaction.connect();
        await transaction.startTransaction();
        try {
            const response = await cb(transaction);
            await transaction.commitTransaction();
            return response;
        } catch (e) {
            await transaction.rollbackTransaction();
            throw e;
        } finally {
            await transaction.release();
        }
    }
}
