import express from 'express';
import { getRepository } from 'typeorm';
import { FormFieldEntity } from '../entities/form-field.entity';
import { FormEntity } from '../entities/form.entity';

const FormRouter = express.Router();

FormRouter.post('/add', async (req, res) => {
    try {
        if (!req.body.fields || !Array.isArray(req.body.fields)) { return res.status(400).send({ error: 'Fields are not provided.' }) }
        const forms = await getRepository(FormEntity).find();
        if (forms.length === 0) {
            const newForm = getRepository(FormEntity).create();
            newForm.name = 'form1';
            newForm.fields = [];
            await newForm.save();
            forms.push(newForm);
        };
        const form = forms[0];
        const fields: { name: string, label: string, type: string, required: boolean, errorMessage: string }[] = req.body.fields;
        for (const field of fields) {
            const newField = getRepository(FormFieldEntity).create();
            Object.assign(newField, field, { form });
            await newField.save();
        };
        res.send(form);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
});

FormRouter.delete('/delete-field/:id', async (req, res) => {
    try {
        const deleteResult = await getRepository(FormFieldEntity).delete(req.params.id);
        if (deleteResult.affected === 0) {
            return res.status(404).send({ error: 'Field not found.' });
        }
        res.send({ status: 'Deleted' });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: e.message });
    }
});

FormRouter.get('/get', async (req, res) => {
    try {
        const forms = await getRepository(FormEntity).find();
        res.send(forms[0]);
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: e.message });
    }
})


export default FormRouter;
