import { DataSource, Repository } from 'typeorm';
import { LikeService } from './likes.service';
import { LikesController } from './likes.controller';
import { Like } from './entities/like.entity';

export class LikesModule {
    public service: LikeService;
    public controller: LikesController;
    public repo: Repository<Like>;

    constructor(datastore: DataSource) {
        this.repo = datastore.getRepository<Like>(Like);
        this.service = new LikeService(this.repo);
        this.controller = new LikesController(this.service);
    }
}
