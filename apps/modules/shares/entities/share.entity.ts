import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { SHARE_ENUM } from '../enums/share.enum';
import { Account } from '@/modules/accounts/entities/account.entity';

@Entity()
export class Share {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ type: 'varchar', length: 255 })
    post!: string;
    @Column({ type: 'varchar', length: 255 })
    account!: string;
    @Column({ type: 'varchar', length: 255 })
    to!: SHARE_ENUM;
    @Column({ type: 'date' })
    createdAt!: Date;
    @Column({ type: 'date' })
    updatedAt!: Date;
    @ManyToOne(() => Account, (account) => account.Shares)
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
