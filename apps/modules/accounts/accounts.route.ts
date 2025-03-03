import { parseBodyPipe } from '@/middlewares/pipes/parse-body-pipe.pipes';
import { uuidParamPipe } from './pipes/uuid-params.pipe';
import { CreateAccountDto } from './dto/create-account.dto';
import express from 'express';
import * as AccountControllers from './accounts.controller';

const router = express.Router();

router.post(
    '/signup/',
    parseBodyPipe(CreateAccountDto),
    AccountControllers.createAccount
);

router.patch('/:id/', AccountControllers.updateAccount);

router.get('/', AccountControllers.getAccounts);

router.get('/:id/', uuidParamPipe('id'), AccountControllers.findAccount);

router.delete('/:id/', AccountControllers.deleteAccount);

export default router;
