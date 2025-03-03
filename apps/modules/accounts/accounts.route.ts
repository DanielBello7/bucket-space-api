import { parseBodyPipe } from '@/middlewares/pipes/parse-body-pipe.pipes';
import { uuidParamPipe } from './pipes/uuid-params.pipe';
import { CreateAccountDto } from './dto/create-account.dto';
import { database } from '@/datasource';
import { AccountController } from './accounts.controller';
import { Account } from './entities/account.entity';
import { AccountService } from './accounts.service';
import express from 'express';

const router = express.Router();
const repo = database.getRepository<Account>(Account);
const service = new AccountService(repo);
const controller = new AccountController(service);

router.post(
    '/signup/',
    parseBodyPipe(CreateAccountDto),
    controller.createAccount
);

router.patch('/:id/', uuidParamPipe('id'), controller.updateAccount);

router.get('/', controller.getAccounts);

router.get('/:id/', uuidParamPipe('id'), controller.findAccount);

router.delete('/:id/', uuidParamPipe('id'), controller.deleteAccount);

export default router;
