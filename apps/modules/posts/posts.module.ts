import { DataSource, Repository } from "typeorm";
import { PostController } from "./posts.controller";
import { PostService } from "./posts.service";
import { Post } from "./entities/post.entity";
import { FileModule } from "../files";

export class PostsModule {
	public service: PostService;
	public controller: PostController;
	public repo: Repository<Post>;
	public files: FileModule;

	constructor(datasource: DataSource) {
		this.repo = datasource.getRepository<Post>(Post);
		this.files = new FileModule(datasource);
		this.service = new PostService(this.repo, this.files.service);
		this.controller = new PostController(this.service);
	}
}
