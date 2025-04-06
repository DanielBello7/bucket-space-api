import { DataSource, Repository } from "typeorm";
import { RefreshService } from "./refresh.service";
import { Refresh } from "./entities/refresh.entity";

export class RefreshModule {
	public service: RefreshService;
	public datasource: DataSource;
	public repo: Repository<Refresh>;

	constructor(database: DataSource) {
		this.datasource = database;
		this.repo = this.datasource.getRepository<Refresh>(Refresh);
		this.service = new RefreshService(this.repo);
	}
}
