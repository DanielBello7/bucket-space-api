import { DataSource, Repository } from 'typeorm';
import { PostController } from './posts.controller';
import { PostService } from './posts.service';
import { Post } from './entities/post.entity';

export class PostsModule {
    public service: PostService;
    public controller: PostController;
    public repo: Repository<Post>;

    constructor(datasource: DataSource) {
        this.repo = datasource.getRepository<Post>(Post);
        this.service = new PostService(this.repo);
        this.controller = new PostController(this.service);
    }
}
