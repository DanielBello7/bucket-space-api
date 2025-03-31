import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';

export class StorageService {
    constructor(
        private readonly folder: string,
        private readonly limits: number
    ) {}

    save(files: Express.Multer.File[]) {
        if (this.isMaxed()) {
            throw new Error('storage maxed out');
        }
        return files.map((file) => this.upload(file));
    }

    upload(file: Express.Multer.File) {
        const id = uuid();
        if (!fs.existsSync(this.folder)) {
            fs.mkdirSync(this.folder);
        }
        const location = path.join(this.folder, id);
        fs.writeFileSync(location, file.buffer);
        return {
            location,
            id,
        };
    }

    getFolderSizeSync(folderPath: string): number {
        let total = 0;
        const files = fs.readdirSync(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isFile()) {
                total += stats.size;
            } else if (stats.isDirectory()) {
                total += this.getFolderSizeSync(filePath);
            }
        }
        return total;
    }

    isMaxed() {
        const size = this.getFolderSizeSync(this.folder);
        /** 1024bytes = 1KB, 104,857,600bytes = 100MB */
        // if (size > 104857600) return true;
        if (size > this.limits) return true;
        return false;
    }

    find(id: string) {
        const location = path.join(this.folder, id);
        if (!fs.existsSync(location)) {
            throw new Error('file missing on disk');
        }
        return fs.readFileSync(location);
    }
}
