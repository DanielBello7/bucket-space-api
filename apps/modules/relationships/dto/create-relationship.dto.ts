import { Expose } from 'class-transformer';
import { Relationship } from '../types/relationship.type';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

type RelationshipCreateInput = Omit<
    Relationship,
    'id' | 'createdAt' | 'updatedAt'
>;

export class CreateRelationshipDto implements RelationshipCreateInput {
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    follower!: string;
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    following!: string;
}
