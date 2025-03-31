import { DataSource, Repository } from 'typeorm';
import { Relationship } from './entities/relationship.entity';
import { RelationshipService } from './relationships.service';
import { RelationshipController } from './relationships.controller';

export class RelationshipModule {
    public repo: Repository<Relationship>;
    public service: RelationshipService;
    public controller: RelationshipController;

    constructor(datastore: DataSource) {
        this.repo = datastore.getRepository<Relationship>(Relationship);
        this.service = new RelationshipService(this.repo);
        this.controller = new RelationshipController(this.service);
    }
}
