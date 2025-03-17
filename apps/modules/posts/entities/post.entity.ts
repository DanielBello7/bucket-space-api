import { Account } from '@/modules/accounts/entities/account.entity';
import { Comment } from '@/modules/comments/entities/comment.entity';
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ type: 'varchar', length: 1000 })
    body!: string;
    @Column({ type: 'varchar', length: 1000 })
    account!: string;
    @Column({ type: 'varchar', length: 1000 })
    media: string | undefined;
    @Column({ type: 'varchar', length: 1000 })
    mimetype: string | undefined;
    @Column({ type: 'date' })
    createdAt!: Date;
    @Column({ type: 'date' })
    updatedAt!: Date;
    @ManyToOne(() => Account, (account) => account.Posts)
    Account!: Account;
    @OneToMany(() => Comment, (comment) => comment.post)
    Comments!: Comment[];

    @BeforeUpdate()
    updated() {
        this.updatedAt = new Date();
    }

    @BeforeInsert()
    defaults() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.Comments = [];
    }
}
