import { Comment } from '@/modules/comments/entities/comment.entity';
import { Like } from '@/modules/likes/entities/like.entity';
import { Post } from '@/modules/posts/entities/post.entity';
import { Relationship } from '@/modules/relationships/entities/relationship.entity';
import { Share } from '@/modules/shares/entities/share.entity';
import { File } from '@/modules/files/entities/file.entity';
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ type: 'varchar', length: 255 })
    name!: string;
    @Column({ type: 'boolean' })
    isVerified!: boolean;
    @Column({ length: 255, type: 'varchar' })
    email!: string;
    @Column({ type: 'date' })
    createdAt!: Date;
    @Column({ type: 'date' })
    updatedAt!: Date;
    @OneToMany(() => Post, (post) => post.account)
    Posts!: Post[];
    @OneToMany(() => Comment, (comment) => comment.account)
    Comments!: Comment[];
    @OneToMany(() => Like, (like) => like.account)
    Likes!: Like[];
    @OneToMany(() => Share, (share) => share.account)
    Shares!: Share[];
    @OneToMany(() => Relationship, (relationship) => relationship.following)
    Followers!: Relationship[];
    @OneToMany(() => Relationship, (relationship) => relationship.follower)
    Following!: Relationship[];
    @OneToMany(() => File, (files) => files.account)
    Files!: File[];

    @BeforeUpdate()
    updated() {
        this.updatedAt = new Date();
    }

    @BeforeInsert()
    defaults() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isVerified = false;
        this.Posts = [];
        this.Comments = [];
        this.Likes = [];
        this.Shares = [];
        this.Followers = [];
        this.Following = [];
        this.Files = [];
    }
}
