import { NotFoundError } from '@/errors/not-found-error.error';
import { Account } from './entities/account.entity';
import { database } from '@/datasource';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { BadRequestError } from '@/errors/bad-request-error.error';

const AccountRepo = database.getRepository<Account>(Account);

async function getAccounts(query?: Record<string, any>) {
    return AccountRepo.find();
}

async function isAccountRegistered(email: string): Promise<boolean> {
    const response = await AccountRepo.findOne({
        where: {
            email,
        },
    });
    if (!response) return false;
    return true;
}

async function registerAccount(body: CreateAccountDto) {
    if (await isAccountRegistered(body.email)) {
        throw new BadRequestError('Email already registered');
    }
    return create(body);
}

async function findAccountUsingId(id: string) {
    const response = await AccountRepo.findOne({
        where: {
            id,
        },
    });
    if (!response) {
        throw new NotFoundError();
    }
    return response;
}

async function updateAccountUsingId(id: string, body: UpdateAccountDto) {
    const { email, ...rest } = body;
    return update(id, rest);
}

async function remove(id: string) {
    return AccountRepo.delete(id);
}

async function create(body: CreateAccountDto) {
    const response = AccountRepo.create(body);
    return AccountRepo.save(response);
}

async function update(id: string, body: UpdateAccountDto) {
    return AccountRepo.update(id, body);
}

export {
    getAccounts,
    isAccountRegistered,
    registerAccount,
    findAccountUsingId,
    updateAccountUsingId,
    remove,
    create,
    update,
};
