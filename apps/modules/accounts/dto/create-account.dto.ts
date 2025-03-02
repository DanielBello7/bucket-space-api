import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAccountDto {
    @Expose()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name!: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MinLength(3)
    email!: string;
}
