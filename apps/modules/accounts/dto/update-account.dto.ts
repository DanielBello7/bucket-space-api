import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto implements Partial<CreateAccountDto> {
    email?: string | undefined;
    name?: string | undefined;
}
