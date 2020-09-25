
import express from 'express';
import { getConnection, getRepository } from 'typeorm';
import { ContactEntity } from '../entities/contact.entity';

const ContactRouter = express.Router();

ContactRouter.post('/add', async (req, res) => {
    try {
        const contact = getRepository(ContactEntity).create();
        Object.assign(contact, req.body);
        await contact.save();
        res.send(contact);
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: e.message });
    }
});

ContactRouter.get('/all', async (req, res) => {
    try {
        const contacts = await getRepository(ContactEntity).find();
        res.send(contacts);
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: e.message });
    }
});

ContactRouter.delete('/delete/:id', async (req, res) => {
    try {
        const deleteResult = await getRepository(ContactEntity).delete(req.params.id);
        if (deleteResult.affected = 0) {
            return res.status(404).send({ error: 'Contact not found.' });
        };
        res.status(200).send({ status: 'success' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
});

export default ContactRouter;
