import { Account } from "@/modules/accounts/entities/account.entity";
import { Comment } from "@/modules/comments/entities/comment.entity";
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	Relation,
} from "typeorm";
import { Post as PostType } from "../types/post.type";
import { Like } from "@/modules/likes/entities/like.entity";
import { Share } from "@/modules/shares/entities/share.entity";

@Entity()
export class Post implements PostType {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: "varchar", length: 1000 })
	body!: string;

	@Column({ type: "varchar" })
	account!: string;

	@Column({ type: "varchar", length: 1000, nullable: true })
	media!: string | undefined;

	@Column({ type: "varchar", length: 1000, nullable: true })
	mimetype!: string | undefined;

	@Column({ type: "date" })
	createdAt!: Date;

	@Column({ type: "date" })
	updatedAt!: Date;

	@ManyToOne(() => Account, (account) => account.Posts)
	@JoinColumn({ name: "account" })
	Account!: Relation<Account>;

	@OneToMany(() => Comment, (comment) => comment.Post)
	Comments!: Relation<Comment[]>;

	@OneToMany(() => Like, (like) => like.Post)
	Likes!: Relation<Like[]>;

	@OneToMany(() => Share, (share) => share.Post)
	Shares!: Relation<Share[]>;

	@BeforeUpdate()
	updated() {
		this.updatedAt = new Date();
	}

	@BeforeInsert()
	defaults() {
		this.createdAt = new Date();
		this.updatedAt = new Date();
		this.Comments = [];
		this.Likes = [];
		this.Shares = [];
	}
}
