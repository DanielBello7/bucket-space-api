import { DataSource, Repository } from 'typeorm';
import { CommentsController } from './comments.controller';
import { CommentService } from './comments.service';
import { Comment } from './entities/comment.entity';

export class CommentsModule {
    public service: CommentService;
    public controller: CommentsController;
    public repo: Repository<Comment>;

    constructor(datasource: DataSource) {
        this.repo = datasource.getRepository<Comment>(Comment);
        this.service = new CommentService(this.repo);
        this.controller = new CommentsController(this.service);
    }
}
