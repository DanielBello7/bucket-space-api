import { CreateRelationshipDto } from './create-relationship.dto';

export class UpdateRelationshipDto implements Partial<CreateRelationshipDto> {
    follower?: string | undefined;
    following?: string | undefined;
}
