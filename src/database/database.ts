import { createConnection } from 'typeorm';
import { ContactEntity } from '../entities/contact.entity';
import { FormFieldEntity } from '../entities/form-field.entity';
import { FormEntity } from '../entities/form.entity';

if (process.env.DATABASE_URL) {
    createConnection({
        name: 'default',
        type: 'postgres',
        url: process.env.DATABASE_URL,
        database: 'd60au90dm24ao3',
        synchronize: true,
        logging: false,
        entities: [
            ContactEntity,
            FormEntity,
            FormFieldEntity
        ],
    }).then(connection => { console.log('Connected!') }).catch((e) => { console.log(e) });
} else {
    createConnection({
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'aramayis95',
        database: 'test',
        synchronize: true,
        logging: false,
        entities: [
            ContactEntity,
            FormEntity,
            FormFieldEntity
        ]
    }).then(connection => { console.log('Connected!') }).catch((e) => { console.log(e) });
}