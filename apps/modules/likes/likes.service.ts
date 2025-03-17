import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

export class LikeService {
    constructor(private readonly likes: Repository<Like>) {}

    async likePost(body: CreateLikeDto) {}
    async modify(id: string, body: UpdateLikeDto) {}
    async getAccountLikes(id: string) {}
    async getPostLikes(id: string) {}
    async countPostLikes(id: string) {}
    async savePostLikes(body: CreateLikeDto) {}
    async isLikedBefore(account: string, post: string) {}

    async create(body: CreateLikeDto) {}
    async remove(id: string) {}
    async update(id: string, body: UpdateLikeDto) {}
    async get(query: Record<string, any> = {}) {}
    async findById(id: string) {}
}
