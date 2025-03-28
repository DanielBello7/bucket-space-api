import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { NotFoundError } from '@/errors/not-found-error.error';

export class PostService {
    constructor(private readonly post: Repository<Post>) {}

    async getAccountPosts(id: string) {
        return this.post.find({
            where: {
                account: id,
            },
        });
    }

    async getAccPostCount(id: string) {
        return this.post.count({
            where: {
                account: id,
            },
        });
    }

    async create(body: CreatePostDto) {
        const response = this.post.create(body);
        return this.post.save(response);
    }

    async remove(id: string) {
        const response = await this.findById(id);
        await this.post.delete(id);
        return response;
    }

    async update(id: string, updates: UpdatePostDto) {
        await this.post.update(id, updates);
        return this.findById(id);
    }

    async modify(id: string, updates: UpdatePostDto) {
        const { account, ...rest } = updates;
        return this.update(id, rest);
    }

    async findById(id: string) {
        const response = await this.post.findOne({
            where: {
                id,
            },
        });
        if (!response) {
            throw new NotFoundError();
        }
        return response;
    }

    async save(body: CreatePostDto, files: Express.Multer.File[]) {
        return this.create(body);
    }

    async get(query: Record<string, any> = {}) {
        return this.post.find(query);
    }
}
