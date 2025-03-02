import express from 'express';
import accounts from './modules/accounts/accounts.route';

const router = express.Router();

router.use('/accounts/', accounts);

export default router;
