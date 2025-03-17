import express from 'express';
import { SharesModule } from './shares.module';
import { database } from '@/datasource';

const router = express.Router();

const module = new SharesModule(database);

router.get('/user/:id/', module.controller.getUserShares);

router.get('/', module.controller.getShares);

router.delete('/:id/', module.controller.unSharePost);

router.get('/count/user/:id/', module.controller.countUserShares);

router.post('/', module.controller.sharePost);

router.get('/:id/', module.controller.findShared);

router.patch('/:id/', module.controller.updateSharedPost);

export default router;
