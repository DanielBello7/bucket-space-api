import { Expose } from 'class-transformer';
import { Comments } from '../types/comments.type';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

type CommentCreateInput = Omit<Comments, 'id' | 'createdAt' | 'updatedAt'>;
export class CreateCommentDto implements CommentCreateInput {
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    post!: string;
    @Expose()
    @IsString()
    @IsNotEmpty()
    body!: string;
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    account!: string;
}
