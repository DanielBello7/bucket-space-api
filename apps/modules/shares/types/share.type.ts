import { SHARE_ENUM } from '../enums/share.enum';
export type Share = {
    id: string;
    post: string;
    account: string;
    to: SHARE_ENUM;
    createdAt: Date;
    updatedAt: Date;
};
