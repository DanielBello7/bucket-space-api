import { QueryRunner } from "typeorm";

export class TransactionsService {
	constructor(private readonly session: QueryRunner) {}

	async execute(cb: (sess: QueryRunner) => Promise<any>) {
		const transaction = this.session;

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
