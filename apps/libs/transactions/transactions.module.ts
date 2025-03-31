import { DataSource, QueryRunner } from "typeorm";
import { TransactionsService } from "./transactions.service";

export class TransactionsModule {
	public service: TransactionsService;

	constructor(private readonly datasource: DataSource) {
		const transaction = this.datasource.createQueryRunner();
		this.service = new TransactionsService(transaction);
	}
}
