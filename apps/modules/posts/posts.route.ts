import express from 'express';
import { PostsModule } from './posts.module';
import { database } from '@/datasource';

const router = express.Router();

const module = new PostsModule(database);

router.get('/', module.controller.getPosts);

router.get('/:id/', module.controller.findPost);

router.post('/', module.controller.savePost);

router.get('/user/:id/', module.controller.getUserPosts);

router.get('/user/:id/count/', module.controller.countUserPosts);

router.delete('/:id/', module.controller.removePost);

export default router;
