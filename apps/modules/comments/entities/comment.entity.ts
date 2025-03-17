import { Account } from '@/modules/accounts/entities/account.entity';
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Comments as CommentType } from '../types/comments.type';
import { Post } from '@/modules/posts/entities/post.entity';

@Entity()
export class Comment implements CommentType {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ type: 'varchar', length: 255 })
    post!: string;
    @Column({ type: 'varchar', length: 1000 })
    body!: string;
    @Column({ type: 'varchar', length: 255 })
    account!: string;
    @Column({ type: 'date' })
    createdAt!: Date;
    @Column({ type: 'date' })
    updatedAt!: Date;
    @ManyToOne(() => Account, (account) => account.Comments)
    Account!: Account;
    @ManyToOne(() => Post, (post) => post.Comments)
    Post!: Post;

    @BeforeUpdate()
    updated() {
        this.updatedAt = new Date();
    }

    @BeforeInsert()
    defaults() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
