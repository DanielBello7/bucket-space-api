import { Expose } from 'class-transformer';
import { SHARE_ENUM } from '../enums/share.enum';
import { Share } from '../types/share.type';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

type ShareCreateInput = Omit<Share, 'id' | 'createdAt' | 'updatedAt'>;
export class CreateShareDto implements ShareCreateInput {
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    post!: string;
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    account!: string;
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsEnum(SHARE_ENUM)
    to!: SHARE_ENUM;
}
