import { SHARE_ENUM } from '../enums/share.enum';
import { CreateShareDto } from './create-share.dto';

export class UpdateShareDto implements Partial<CreateShareDto> {
    post?: string | undefined;
    account?: string | undefined;
    to?: SHARE_ENUM | undefined;
}
