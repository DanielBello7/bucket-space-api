import express from 'express';
import { LikesModule } from './likes.module';
import { database } from '@/datasource';

const router = express.Router();

const module = new LikesModule(database);

router.get('/post/:id/', module.controller.getPostLikes);

router.get('/post/:id/count/', module.controller.getPostLikesCount);

router.post('/', module.controller.likePost);

router.get('/account/:id/', module.controller.getAccLikes);

router.delete('/:id/', module.controller.dislikePost);

export default router;
