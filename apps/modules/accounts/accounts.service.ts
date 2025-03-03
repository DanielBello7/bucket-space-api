import { NotFoundError } from '@/errors/not-found-error.error';
import { Account } from './entities/account.entity';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { BadRequestError } from '@/errors/bad-request-error.error';
import { Repository } from 'typeorm';

export class AccountService {
    constructor(private readonly accounts: Repository<Account>) {}

    async get(query?: Record<string, any>) {
        return this.accounts.find();
    }

    async isRegistered(email: string): Promise<boolean> {
        const response = await this.accounts.findOne({
            where: {
                email,
            },
        });
        if (!response) return false;
        return true;
    }

    async register(body: CreateAccountDto) {
        if (await this.isRegistered(body.email)) {
            throw new BadRequestError('Email already registered');
        }
        return this.create(body);
    }

    async update(id: string, body: UpdateAccountDto) {
        return this.accounts.update(id, body);
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

    async modify(id: string, body: UpdateAccountDto) {
        const { email, ...rest } = body;
        return this.update(id, rest);
    }

    async remove(id: string) {
        return this.accounts.delete(id);
    }

    async create(body: CreateAccountDto) {
        const response = this.accounts.create(body);
        return this.accounts.save(response);
    }
}
