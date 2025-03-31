import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto implements Partial<CreateCommentDto> {
    post?: string | undefined;
    body?: string | undefined;
    account?: string | undefined;
}
