import { isEmail } from "class-validator";
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Otp as OtpType } from "../types/otp.type";

@Entity()
export class Otp implements OtpType {
	@PrimaryGeneratedColumn("uuid")
	id!: string;
	@Column({ type: "varchar", length: 255 })
	email!: string;
	@Column({ type: "varchar", length: 255 })
	token!: string;
	@Column({ type: "date" })
	expiresAt!: Date;
	@Column({ type: "date" })
	createdAt!: Date;
	@Column({ type: "date" })
	updatedAt!: Date;

	@BeforeUpdate()
	updated() {
		this.updatedAt = new Date();
	}

	@BeforeInsert()
	insert() {
		if (!isEmail(this.email)) {
			throw new Error("not a valid email");
		}
		this.updatedAt = new Date();
		this.createdAt = new Date();
	}
}
