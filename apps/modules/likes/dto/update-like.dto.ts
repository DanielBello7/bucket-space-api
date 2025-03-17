import { CreateLikeDto } from './create-like.dto';

export class UpdateLikeDto implements Partial<CreateLikeDto> {
    post?: string | undefined;
    account?: string | undefined;
}
