import { Repository } from "typeorm";
import { Share } from "./entities/share.entity";
import { CreateShareDto } from "./dto/create-share.dto";
import { UpdateShareDto } from "./dto/update-share.dto";
import { NotFoundError } from "@/errors/not-found-error.error";
import { BadRequestError } from "@/errors/bad-request-error.error";

export class ShareService {
	constructor(private readonly shares: Repository<Share>) {}

	async alreadyExists(account: string, post: string) {
		const response = await this.shares.findOne({
			where: {
				account,
				post,
			},
		});
		if (!response) return false;
		return true;
	}

	async save(body: CreateShareDto) {
		if (await this.alreadyExists(body.account, body.post)) {
			throw new BadRequestError("post already shared");
		}
		return this.create(body);
	}

	async modify(id: string, updates: UpdateShareDto) {
		const { account, post, ...rest } = updates;
		return this.update(id, rest);
	}

	async countUserShares(id: string) {
		return this.shares.count({
			where: {
				account: id,
			},
		});
	}

	async getUserShares(id: string) {
		return this.shares.find({
			where: {
				account: id,
			},
		});
	}

	async findById(id: string) {
		const response = await this.shares.findOne({
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

	async get(query: Record<string, any> = {}) {
		return this.shares.find({
			where: query,
			relations: {
				Account: true,
			},
		});
	}

	async create(body: CreateShareDto) {
		const response = this.shares.create(body);
		return this.shares.save(response);
	}

	async update(id: string, updates: UpdateShareDto) {
		await this.shares.update(id, updates);
		return this.findById(id);
	}

	async remove(id: string) {
		const response = await this.findById(id);
		await this.shares.delete(id);
		return response;
	}
}
