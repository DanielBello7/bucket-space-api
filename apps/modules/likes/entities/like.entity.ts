import { Account } from '@/modules/accounts/entities/account.entity';
import {
    BeforeUpdate,
    BeforeInsert,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    Entity,
} from 'typeorm';

@Entity()
export class Like {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ type: 'varchar', length: 255 })
    post!: string;
    @Column({ type: 'varchar', length: 255 })
    account!: string;
    @Column({ type: 'date' })
    createdAt!: Date;
    @Column({ type: 'date' })
    updatedAt!: Date;
    @ManyToOne(() => Account, (account) => account.Likes)
    Account!: Account;

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
