import { Expose } from "class-transformer";
import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Min,
} from "class-validator";

export class LoginDto {
	@Expose()
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email!: string;
	@Expose()
	@IsOptional()
	@IsString()
	otp?: string;
}
