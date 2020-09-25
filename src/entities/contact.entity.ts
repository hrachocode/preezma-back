import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Contacts', synchronize: true })
export class ContactEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'name', type: 'varchar' })
    public name: string;

    @Column({ name: 'phone', type: 'varchar' })
    public phone: string;

    @Column({ name: 'date', type: 'date', nullable: true })
    public date: Date;

    @CreateDateColumn({ name: 'dateCreated', type: 'date' })
    public createdAt: Date;
};
