import express from 'express';
import { RelationshipModule } from './relationships.module';
import { database } from '@/datasource';

const router = express.Router();

const module = new RelationshipModule(database);

router.get('/user/:id/following/');

router.get('user/:id/followers/');

router.delete('/unfollow/');

router.get('/user/:id/following/count/');

router.get('/users/:id/followers/count/');

router.post('/follow/');

router.get('/:id/counterpart/');

export default router;
