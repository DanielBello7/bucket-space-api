import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { UpdateFileDto } from './dto/update-file.dto';
import { CreateFileDto } from './dto/create-file.dto';
import { NotFoundError } from '@/errors/not-found-error.error';

export class FileService {
    constructor(private readonly files: Repository<File>) {}

    async save(id: string, file: Express.Multer.File) {
        return this.create({
            title: file.originalname,
            account: id,
            size: file.size,
            mimetype: file.mimetype,
        });
    }

    async removeMany(query: Record<string, any> = {}) {
        return this.files.delete(query);
    }

    async findByTitle(title: string) {
        const response = await this.files.findOne({
            where: {
                title,
            },
        });
        if (!response) {
            throw new NotFoundError();
        }
        return response;
    }

    async findById(id: string) {
        const response = await this.files.findOne({
            where: {
                id,
            },
        });
        if (!response) {
            throw new NotFoundError();
        }
        return response;
    }

    async get(query: Record<string, any> = {}) {
        return this.files.find({
            where: query,
        });
    }

    async create(body: CreateFileDto) {
        const response = this.files.create(body);
        return this.files.save(response);
    }

    async update(id: string, updates: UpdateFileDto) {
        await this.files.update(id, updates);
        return this.findById(id);
    }

    async remove(id: string) {
        const response = await this.findById(id);
        await this.files.delete(id);
        return response;
    }
}
