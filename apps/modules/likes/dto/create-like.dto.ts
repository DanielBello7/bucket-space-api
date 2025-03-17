import { Expose } from 'class-transformer';
import { Likes } from '../types/like.type';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

type LikeCreateInput = Omit<Likes, 'id' | 'createdAt' | 'updatedAt'>;

export class CreateLikeDto implements LikeCreateInput {
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    post!: string;
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    account!: string;
}
