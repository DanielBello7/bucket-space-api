import { AccountController } from "./accounts.controller";
import { Account } from "./entities/account.entity";
import { AccountService } from "./accounts.service";
import { DataSource, Repository } from "typeorm";

export class AccountModule {
	public repo: Repository<Account>;
	public service: AccountService;
	public controller: AccountController;

	constructor(datasource: DataSource) {
		this.repo = datasource.getRepository<Account>(Account);
		this.service = new AccountService(this.repo);
		this.controller = new AccountController(this.service);
	}
}
