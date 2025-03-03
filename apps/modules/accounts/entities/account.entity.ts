import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    name!: string;

    @Column({ type: 'boolean' })
    isVerified!: boolean;

    @Column({
        length: 255,
        type: 'varchar',
    })
    email!: string;

    @Column({ type: 'date' })
    createdAt!: Date;

    @Column({ type: 'date' })
    updatedAt!: Date;

    @BeforeUpdate()
    update_timestamp() {
        this.updatedAt = new Date();
    }

    @BeforeInsert()
    set_defaults() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isVerified = false;
    }
}
