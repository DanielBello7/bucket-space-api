import { Expose } from "class-transformer";
import { Files } from "../types/files.types";
import { IsNotEmpty, IsNumber, IsString, IsUrl, IsUUID } from "class-validator";

type FilesCreateInput = Omit<Files, "id" | "createdAt" | "updatedAt">;
export class CreateFileDto implements FilesCreateInput {
	@Expose()
	@IsNotEmpty()
	@IsString()
	@IsUrl()
	url!: string;
	@Expose()
	@IsNotEmpty()
	@IsString()
	@IsUrl()
	location!: string;
	@Expose()
	@IsNotEmpty()
	@IsString()
	@IsUUID()
	memory!: string;
	@Expose()
	@IsNotEmpty()
	@IsString()
	title!: string;
	@Expose()
	@IsNotEmpty()
	@IsString()
	mimetype!: string;
	@Expose()
	@IsNotEmpty()
	@IsNumber()
	size!: number;
	@Expose()
	@IsNotEmpty()
	@IsString()
	@IsUUID()
	account!: string;
}
