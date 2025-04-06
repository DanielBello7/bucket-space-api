import { Expose } from "class-transformer";
import { IsJWT, IsNotEmpty, IsString } from "class-validator";
export class RefreshDto {
	@Expose()
	@IsString()
	@IsJWT()
	@IsNotEmpty()
	refresh!: string;
}
