import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Refresh as RefreshType } from "../types/refresh.type";

@Entity()
export class Refresh implements RefreshType {
	@PrimaryGeneratedColumn("uuid")
	id!: string;
	@Column({ type: "varchar", length: 255 })
	account!: string;
	@Column({ type: "varchar", length: 999 })
	refresh!: string;
	@Column({ type: "date" })
	createdAt!: Date;
	@Column({ type: "date" })
	updatedAt!: Date;

	@BeforeInsert()
	defaults() {
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}

	@BeforeUpdate()
	updated() {
		this.updatedAt = new Date();
	}
}
