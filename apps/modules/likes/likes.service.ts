import { Repository } from "typeorm";
import { Like } from "./entities/like.entity";
import { CreateLikeDto } from "./dto/create-like.dto";
import { UpdateLikeDto } from "./dto/update-like.dto";
import { NotFoundError } from "@/errors/not-found-error.error";
import { BadRequestError } from "@/errors/bad-request-error.error";

export class LikeService {
	constructor(private readonly likes: Repository<Like>) {}

	/** likes a post by a user */
	async likePost(body: CreateLikeDto) {
		if (await this.isLikedBefore(body.account, body.post)) {
			throw new BadRequestError("already liked");
		}
		return this.create(body);
	}

	/** makes changes to the body of a like */
	async modify(id: string, body: UpdateLikeDto) {
		return this.update(id, body);
	}

	/** returns all the likes an account has made */
	async getAccountLikes(id: string) {
		return this.likes.find({
			where: {
				account: id,
			},
		});
	}

	/** returns all the liked records for a post */
	async getPostLikes(id: string) {
		return this.likes.find({
			where: {
				post: id,
			},
			relations: {
				Account: true,
			},
		});
	}

	/** returns the number of likes on a post */
	async countPostLikes(id: string) {
		return this.likes.count({
			where: {
				post: id,
			},
		});
	}

	/** checks if a post has been liked before */
	async isLikedBefore(account: string, post: string) {
		const response = await this.likes.findOne({
			where: {
				account,
				post,
			},
		});
		if (!response) return false;
		return true;
	}

	async create(body: CreateLikeDto) {
		const response = this.likes.create(body);
		return this.likes.save(response);
	}

	async remove(id: string) {
		const response = await this.findById(id);
		await this.likes.delete(id);
		return response;
	}

	async update(id: string, body: UpdateLikeDto) {
		await this.likes.update(id, body);
		return this.findById(id);
	}

	async get(query: Record<string, any> = {}) {
		const page = query.page ? parseInt(query.page, 10) : 1;
		const take = query.take ? parseInt(query.take, 10) : 100;
		const skip = (page - 1) * take;

		const { page: _, limit: __, ...filters } = query;

		const [data, total] = await this.likes.findAndCount({
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
		const response = await this.likes.findOne({
			where: {
				id,
			},
		});
		if (!response) {
			throw new NotFoundError();
		}
		return response;
	}
}
