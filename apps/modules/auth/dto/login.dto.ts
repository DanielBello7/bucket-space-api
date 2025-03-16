import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email!: string;
    @Expose()
    @IsNotEmpty()
    @IsString()
    password!: string;
}
