import { CreateOtpDto } from './create-otp.dto';

export class UpdateOtpDto implements Partial<CreateOtpDto> {
    email?: string | undefined;
    token?: string | undefined;
    expiresAt?: Date | undefined;
}
