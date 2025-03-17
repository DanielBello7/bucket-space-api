import { Account } from '@/modules/accounts/entities/account.entity';
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Files as FileType } from '../types/files.types';

@Entity()
export class File implements FileType {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ type: 'varchar', length: 255 })
    title!: string;
    @Column({ type: 'varchar', length: 255 })
    mimetype!: string;
    @Column({ type: 'int', length: 255 })
    size!: number;
    @Column({ type: 'varchar', length: 255 })
    account!: string;
    @Column({ type: 'date' })
    updatedAt!: Date;
    @Column({ type: 'date' })
    createdAt!: Date;
    @ManyToOne(() => Account, (account) => account.Files)
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
