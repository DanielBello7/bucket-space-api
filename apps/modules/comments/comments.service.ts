import { Repository } from "typeorm";
import { Comment } from "./entities/comment.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { NotFoundError } from "@/errors/not-found-error.error";

export class CommentService {
	constructor(private readonly comments: Repository<Comment>) {}

	/** this returns the comments for a post */
	async getCommentsForPost(id: string) {
		return this.comments.find({
			where: {
				post: id,
			},
			relations: {
				Account: true,
			},
		});
	}

	/** this returns the comments made by a person overall */
	async getCommentsMadeByAcc(id: string) {
		return this.comments.find({
			where: {
				account: id,
			},
		});
	}

	/** this returns the comments made by a person for a post */
	async getCommentsMadeByAccForPost(post: string, account: string) {
		return this.comments.find({
			where: {
				post,
				account,
			},
		});
	}

	/** count the number of comments for a post */
	async countPostComments(post: string) {
		return this.comments.count({
			where: {
				post,
			},
		});
	}

	async get(query: Record<string, any> = {}) {
		const page = query.page ? parseInt(query.page, 10) : 1;
		const take = query.take ? parseInt(query.take, 10) : 100;
		const skip = (page - 1) * take;

		const { page: _, limit: __, ...filters } = query;

		const [data, total] = await this.comments.findAndCount({
			where: filters,
			skip,
			take,
			relations: {
				Account: true,
			},
		});

		return {
			data,
			total,
			page,
			take,
			totalPages: Math.ceil(total / take),
		};
	}

	async findById(id: string) {
		const response = await this.comments.findOne({
			where: {
				id,
			},
			relations: {
				Account: true,
				Post: true,
			},
		});
		if (!response) {
			throw new NotFoundError();
		}
		return response;
	}

	async create(body: CreateCommentDto) {
		const response = this.comments.create(body);
		return this.comments.save(response);
	}

	async update(id: string, updates: UpdateCommentDto) {
		await this.comments.update(id, updates);
		return this.findById(id);
	}

	async remove(id: string) {
		const response = await this.findById(id);
		await this.comments.delete(id);
		return response;
	}
}
