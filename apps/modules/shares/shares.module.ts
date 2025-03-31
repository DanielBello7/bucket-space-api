import { DataSource, Repository } from 'typeorm';
import { Share } from './entities/share.entity';
import { ShareService } from './shares.service';
import { SharesController } from './shares.controller';

export class SharesModule {
    public repo: Repository<Share>;
    public service: ShareService;
    public controller: SharesController;

    constructor(datastore: DataSource) {
        this.repo = datastore.getRepository<Share>(Share);
        this.service = new ShareService(this.repo);
        this.controller = new SharesController(this.service);
    }
}
