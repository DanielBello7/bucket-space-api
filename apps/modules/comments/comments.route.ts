import express from 'express';
import { database } from '@/datasource';
import { CommentsModule } from './comments.module';

const router = express.Router();

const module = new CommentsModule(database);

router.get('/post/:id/', module.controller.getPostComments);

router.get('/post/:id/count/', module.controller.getPostCommentsCount);

router.get('/:id/', module.controller.findComment);

router.delete('/:id/', module.controller.deleteComment);

router.post('/', module.controller.makeComment);

export default router;
