import { Expose } from "class-transformer";
import { Post } from "../types/post.type";
import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

type PostCreateInput = Omit<Post, "id" | "createdAt" | "updatedAt">;
export class CreatePostDto implements PostCreateInput {
	@Expose()
	@IsNotEmpty()
	@IsString()
	body!: string;
	@Expose()
	@IsNotEmpty()
	@IsString()
	@IsUUID()
	account!: string;
	@Expose()
	@IsOptional()
	@IsString({ each: true })
	media!: string[];
	@Expose()
	@IsOptional()
	@IsString({ each: true })
	mimetype!: string[];
}
