import express from 'express';
import { RelationshipModule } from './relationships.module';
import { database } from '@/datasource';

const router = express.Router();

const module = new RelationshipModule(database);

router.get('/user/:id/following/', module.controller.getUserFollowing);

router.get('/user/:id/followers/', module.controller.getUserFollowers);

router.delete('/unfollow/', module.controller.unfollowAccount);

router.get('/user/:id/following/count/', module.controller.numUserFollowing);

router.get('/users/:id/followers/count/', module.controller.numUserFollowers);

router.post('/follow/', module.controller.followAccount);

router.get('/:id/counterpart/', module.controller.findCounterPart);

export default router;
