import { DataSource, Repository } from "typeorm";
import { PostController } from "./posts.controller";
import { PostService } from "./posts.service";
import { Post } from "./entities/post.entity";
import { StorageService } from "@/libs/storage/storage.service";
import { StorageModule } from "@/libs/storage/storage.module";

export class PostsModule {
	public service: PostService;
	public controller: PostController;
	public repo: Repository<Post>;
	public storage: StorageModule;

	constructor(datasource: DataSource) {
		this.repo = datasource.getRepository<Post>(Post);
		this.storage = new StorageModule();
		this.service = new PostService(this.repo, this.storage.service);
		this.controller = new PostController(this.service);
	}
}
