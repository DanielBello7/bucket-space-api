import express from 'express';
import { AuthModule } from './auth.module';
import { database } from '@/datasource';

const router = express.Router();

const module = new AuthModule(database);

router.post('/signin', module.controller.signIn);

router.get('/signout', module.controller.logout);

router.post('/refresh/', module.controller.refresh);

router.get('/me', module.controller.me);

export default router;
