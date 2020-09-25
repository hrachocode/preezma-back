import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FormEntity } from './form.entity';

@Entity({ name: 'FormFields', synchronize: true })
export class FormFieldEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(type => FormEntity, form => form.fields, { eager: false })
    form: FormEntity;

    @Column({ name: 'label', type: 'varchar' })
    public label: string;

    @Column({ name: 'name', type: 'varchar' })
    public name: string;

    @Column({ name: 'type', type: 'varchar' })
    public type: string;

    @Column({ name: 'required', type: 'boolean' })
    public required: boolean;

    @Column({ name: 'errorMessage', type: 'varchar' })
    public errorMessage: 'Name is required and must a valid string'
};
