import { Account } from "@/modules/accounts/entities/account.entity";
import {
	BeforeUpdate,
	BeforeInsert,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	Entity,
	Relation,
	JoinColumn,
} from "typeorm";
import { Likes } from "../types/like.type";
import { Post } from "@/modules/posts/entities/post.entity";

@Entity()
export class Like implements Likes {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: "varchar", length: 255 })
	post!: string;

	@Column({ type: "varchar", length: 255 })
	account!: string;

	@Column({ type: "datetime" })
	createdAt!: Date;

	@Column({ type: "datetime" })
	updatedAt!: Date;

	@ManyToOne(() => Account, (account) => account.Likes)
	@JoinColumn({ name: "account" })
	Account!: Relation<Account>;

	@ManyToOne(() => Post, (post) => post.Likes)
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
