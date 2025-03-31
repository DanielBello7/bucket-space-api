import { DataSource, Repository } from "typeorm";
import { FileService } from "./file.service";
import { File } from "./entities/file.entity";
import { FileController } from "./file.controller";
import { StorageModule } from "@/libs/storage/storage.module";

export class FileModule {
	public service: FileService;
	public repo: Repository<File>;
	public controller: FileController;
	public storage: StorageModule;

	constructor(datastore: DataSource) {
		this.repo = datastore.getRepository<File>(File);
		this.storage = new StorageModule();
		this.service = new FileService(this.repo, this.storage.service);
		this.controller = new FileController();
	}
}
