import { Account } from '@/modules/accounts/entities/account.entity';
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Relationship as RelationshipType } from '../types/relationship.type';

@Entity()
export class Relationship implements RelationshipType {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ type: 'varchar', length: 255 })
    follower!: string;
    @Column({ type: 'varchar', length: 255 })
    following!: string;
    @Column({ type: 'date' })
    createdAt!: Date;
    @Column({ type: 'date' })
    updatedAt!: Date;
    @ManyToOne(() => Account, (account) => account.Followers)
    Following!: Account;
    @ManyToOne(() => Account, (account) => account.Following)
    Follower!: Account;

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
