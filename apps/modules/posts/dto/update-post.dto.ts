import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto implements Partial<CreatePostDto> {
    body?: string | undefined;
    account?: string | undefined;
    media?: string | undefined;
    mimetype?: string | undefined;
}
