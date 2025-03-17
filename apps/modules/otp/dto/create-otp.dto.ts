import { Expose } from 'class-transformer';
import { Otp } from '../types/otp.type';
import {
    IsDate,
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

type OtpCreateInput = Omit<Otp, 'id' | 'createdAt' | 'updatedAt'>;

export class CreateOtpDto implements OtpCreateInput {
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email!: string;
    @Expose()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    token!: string;
    @Expose()
    @IsNotEmpty()
    @IsDate()
    expiresAt!: Date;
}
