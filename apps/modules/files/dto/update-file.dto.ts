import { CreateFileDto } from './create-file.dto';

export class UpdateFileDto implements Partial<CreateFileDto> {
    title?: string | undefined;
    mimetype?: string | undefined;
    size?: number | undefined;
    account?: string | undefined;
}
