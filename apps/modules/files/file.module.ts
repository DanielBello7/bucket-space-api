import { DataSource, Repository } from 'typeorm';
import { FileService } from './file.service';
import { File } from './entities/file.entity';
import { FileController } from './file.controller';

export class FileModule {
    public service: FileService;
    public repo: Repository<File>;
    public controller: FileController;

    constructor(datastore: DataSource) {
        this.repo = datastore.getRepository<File>(File);
        this.service = new FileService(this.repo);
        this.controller = new FileController();
    }
}
