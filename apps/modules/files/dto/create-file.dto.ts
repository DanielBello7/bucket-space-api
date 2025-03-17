import { Expose } from 'class-transformer';
import { Files } from '../types/files.types';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

type FilesCreateInput = Omit<Files, 'id' | 'createdAt' | 'updatedAt'>;
export class CreateFileDto implements FilesCreateInput {
    @Expose()
    @IsNotEmpty()
    @IsString()
    title!: string;
    @Expose()
    @IsNotEmpty()
    @IsString()
    mimetype!: string;
    @Expose()
    @IsNotEmpty()
    @IsNumber()
    size!: number;
    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    account!: string;
}
