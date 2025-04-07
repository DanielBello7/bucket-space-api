import { Comment } from "@/modules/comments/entities/comment.entity";
import { Like } from "@/modules/likes/entities/like.entity";
import { Post } from "@/modules/posts/entities/post.entity";
import { Relationship } from "@/modules/relationships/entities/relationship.entity";
import { Share } from "@/modules/shares/entities/share.entity";
import { File } from "@/modules/files/entities/file.entity";
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	Relation,
} from "typeorm";
import { Account as AccountType } from "../types/accounts.type";

@Entity()
export class Account implements AccountType {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: "varchar", length: 255 })
	name!: string;

	@Column({ type: "boolean" })
	isVerified!: boolean;

	@Column({ length: 255, type: "varchar" })
	email!: string;

	@Column({ type: "datetime" })
	createdAt!: Date;

	@Column({ type: "datetime" })
	updatedAt!: Date;

	@OneToMany(() => Post, (post) => post.Account)
	Posts!: Relation<Post[]>;

	@OneToMany(() => Comment, (comment) => comment.Account)
	Comments!: Relation<Comment[]>;

	@OneToMany(() => Like, (like) => like.Account)
	Likes!: Relation<Like[]>;

	@OneToMany(() => Share, (share) => share.Account)
	Shares!: Relation<Share[]>;

	@OneToMany(() => Relationship, (relationship) => relationship.Following)
	Followers!: Relation<Relationship[]>;

	@OneToMany(() => Relationship, (relationship) => relationship.Follower)
	Following!: Relation<Relationship[]>;

	@OneToMany(() => File, (files) => files.Account)
	Files!: Relation<File[]>;

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
