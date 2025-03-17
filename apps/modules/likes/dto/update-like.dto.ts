import { CreateLikeDto } from './create-like.dto';

export class UpdateOtpDto implements Partial<CreateLikeDto> {
    post?: string | undefined;
    account?: string | undefined;
}
