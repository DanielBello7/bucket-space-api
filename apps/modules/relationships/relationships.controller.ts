import { RelationshipService } from './relationships.service';

export class RelationshipController {
    constructor(private readonly relationships: RelationshipService) {}
}
