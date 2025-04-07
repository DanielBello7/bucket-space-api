import { NotFoundError } from "@/errors/not-found-error.error";
import { Account } from "./entities/account.entity";
import { UpdateAccountDto } from "./dto/update-account.dto";
import { CreateAccountDto } from "./dto/create-account.dto";
import { BadRequestError } from "@/errors/bad-request-error.error";
import { Repository } from "typeorm";

export class AccountService {
	constructor(private readonly accounts: Repository<Account>) {}

	/** this checks if the email is used */
	async isUsed(email: string): Promise<boolean> {
		const response = await this.accounts.findOne({
			where: {
				email,
			},
		});
		if (!response) return false;
		return true;
	}

	/** this registers an account */
	async register(body: CreateAccountDto) {
		if (await this.isUsed(body.email)) {
			throw new BadRequestError("Email already registered");
		}
		return this.create(body);
	}

	/** this updates an account excluding important fields */
	async modify(id: string, body: UpdateAccountDto) {
		const { email, ...rest } = body;
		return this.update(id, rest);
	}

	/** returns an account using the email as a query */
	async findByEmail(email: string) {
		const response = await this.accounts.findOne({
			where: {
				email,
			},
		});
		if (!response) {
			throw new NotFoundError("email not registered");
		}
		return response;
	}

	async get(query: Record<string, any> = {}) {
		const page = query.page ? parseInt(query.page, 10) : 1;
		const take = query.take ? parseInt(query.take, 10) : 100;
		const skip = (page - 1) * take;

		const { page: _, limit: __, ...filters } = query;

		const [data, total] = await this.accounts.findAndCount({
			where: filters,
			skip,
			take,
		});

		return {
			data,
			total,
			page,
			take,
			totalPages: Math.ceil(total / take),
		};
	}

	async update(id: string, body: UpdateAccountDto) {
		await this.accounts.update(id, body);
		return this.findById(id);
	}

	async findById(id: string) {
		const response = await this.accounts.findOne({
			where: {
				id,
			},
		});
		if (!response) {
			throw new NotFoundError();
		}
		return response;
	}

	async remove(id: string) {
		const response = await this.findById(id);
		await this.accounts.delete(id);
		return response;
	}

	async create(body: CreateAccountDto) {
		const response = this.accounts.create(body);
		return this.accounts.save(response);
	}
}
