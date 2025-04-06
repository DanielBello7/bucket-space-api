import { Expose } from "class-transformer";
import { Refresh } from "../types/refresh.type";
import { IsJWT, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateRefreshDto
	implements Omit<Refresh, "id" | "createdAt" | "updatedAt">
{
	@Expose()
	@IsString()
	@IsNotEmpty()
	@IsUUID()
	account!: string;
	@Expose()
	@IsString()
	@IsNotEmpty()
	@IsJWT()
	refresh!: string;
}
