import { Repository, In } from "typeorm";
import { Otp } from "./entities/otp.entity";
import { CreateOtpDto } from "./dto/create-otp.dto";
import { UpdateOtpDto } from "./dto/update-otp.dto";
import { NotFoundError } from "@/errors/not-found-error.error";

export class OtpService {
	constructor(private readonly otp: Repository<Otp>) {}

	/** removes many otps using ids */
	async removeByIds(ids: string[]) {
		return this.otp.delete({
			id: In(ids),
		});
	}

	async get(query: Record<string, any> = {}) {
		return this.otp.find({
			where: query,
		});
	}

	async findById(id: string) {
		const response = await this.otp.findOne({
			where: {
				id,
			},
		});
		if (!response) {
			throw new NotFoundError();
		}
		return response;
	}

	async findByToken(token: string) {
		const response = await this.otp.findOne({
			where: {
				token,
			},
		});
		if (!response) {
			throw new NotFoundError("otp token not found");
		}
		return response;
	}

	async create(body: CreateOtpDto) {
		const content = this.otp.create(body);
		return this.otp.save(content);
	}

	async update(id: string, body: UpdateOtpDto) {
		return this.otp.update(id, body);
	}

	async remove(id: string) {
		return this.otp.delete(id);
	}

	async removeMany(query: Record<string, any> = {}) {
		return this.otp.delete(query);
	}
}
