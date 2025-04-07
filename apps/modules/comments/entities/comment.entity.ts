import { Account } from "@/modules/accounts/entities/account.entity";
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	Relation,
} from "typeorm";
import { Comments as CommentType } from "../types/comments.type";
import { Post } from "@/modules/posts/entities/post.entity";

@Entity()
export class Comment implements CommentType {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: "varchar", length: 1000 })
	post!: string;

	@Column({ type: "varchar", length: 1000 })
	body!: string;

	@Column({ type: "varchar", length: 1000 })
	account!: string;

	@Column({ type: "datetime" })
	createdAt!: Date;

	@Column({ type: "datetime" })
	updatedAt!: Date;

	@ManyToOne(() => Account, (account) => account.Comments)
	@JoinColumn({ name: "account" })
	Account!: Relation<Account>;

	@ManyToOne(() => Post, (post) => post.Comments)
	@JoinColumn({ name: "post" })
	Post!: Relation<Post>;

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
