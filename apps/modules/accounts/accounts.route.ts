import express from 'express';
import * as AccountControllers from './accounts.controller';

const router = express.Router();

router.get('/', AccountControllers.getAccounts);

router.get('/:id/', AccountControllers.findAccount);

router.post('/signup/', AccountControllers.createAccount);

router.patch('/:id/', AccountControllers.updateAccount);

router.delete('/:id/', AccountControllers.deleteAccount);

export default router;
