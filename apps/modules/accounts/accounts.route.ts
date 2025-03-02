import * as AccountControllers from './accounts.controller';
import { uuidParamPipe } from './pipes/uuid-params.pipe';
import express from 'express';

const router = express.Router();

router.post('/signup/', AccountControllers.createAccount);

router.patch('/:id/', AccountControllers.updateAccount);

router.get('/', AccountControllers.getAccounts);

router.get('/:id/', uuidParamPipe('id'), AccountControllers.findAccount);

router.delete('/:id/', AccountControllers.deleteAccount);

export default router;
