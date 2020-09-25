import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FormFieldEntity } from './form-field.entity';

@Entity({ name: 'Forms', synchronize: true })
export class FormEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'name', type: 'varchar' })
    public name: string;

    @OneToMany(type => FormFieldEntity, field => field.form, { eager: true })
    public fields: FormFieldEntity[]
}