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
import { SHARE_ENUM } from "../enums/share.enum";
import { Account } from "@/modules/accounts/entities/account.entity";
import { Post } from "@/modules/posts/entities/post.entity";
import { Share as ShareType } from "../types/share.type";

@Entity()
export class Share implements ShareType {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: "varchar", length: 255 })
	post!: string;

	@Column({ type: "varchar", length: 255 })
	account!: string;

	@Column({ type: "varchar", length: 255 })
	to!: SHARE_ENUM;

	@Column({ type: "datetime" })
	createdAt!: Date;

	@Column({ type: "datetime" })
	updatedAt!: Date;

	@ManyToOne(() => Account, (account) => account.Shares)
	@JoinColumn({ name: "account" })
	Account!: Relation<Account>;

	@ManyToOne(() => Post, (post) => post.Shares)
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
