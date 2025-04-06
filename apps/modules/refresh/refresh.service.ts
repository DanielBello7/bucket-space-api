import { Repository } from "typeorm";
import { Refresh } from "./entities/refresh.entity";
import { CreateRefreshDto } from "./dto/create-refresh.dto";
import { UpdateRefreshDto } from "./dto/update-refresh.dto";
import { NotFoundError } from "@/errors/not-found-error.error";

export class RefreshService {
	constructor(private readonly refresh: Repository<Refresh>) {}

	async create(body: CreateRefreshDto) {
		const response = this.refresh.create(body);
		return this.refresh.save(response);
	}

	async update(id: string, body: UpdateRefreshDto) {
		return this.refresh.update(id, body);
	}

	async findById(id: string) {
		const response = await this.refresh.findOne({
			where: {
				id,
			},
		});
		if (response) return response;
		throw new NotFoundError();
	}

	async findByRefresh(refresh: string) {
		const response = await this.refresh.findOne({
			where: {
				refresh,
			},
		});
		if (response) return response;
		throw new NotFoundError();
	}

	async findByRefreshOrNull(refresh: string) {
		return this.refresh.findOne({
			where: {
				refresh,
			},
		});
	}

	async get(query: Record<string, any> = {}) {
		return this.refresh.find({
			where: query,
		});
	}

	async remove(id: string) {
		return this.refresh.delete(id);
	}

	async removeMany(query: Record<string, any> = {}) {
		return this.refresh.delete(query);
	}
}
