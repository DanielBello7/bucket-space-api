import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Account } from '../types/accounts.type';

type AccountCreateInput = Omit<
    Account,
    'id' | 'createdAt' | 'updatedAt' | 'isVerified'
>;

export class CreateAccountDto implements AccountCreateInput {
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
