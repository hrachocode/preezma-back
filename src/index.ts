import express from 'express';
import ContactRouter from './routers/contacts.router';
import FormRouter from './routers/form.router';
import cors from 'cors';
import './database/database';

const port = process.env.PORT ? process.env.PORT : 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/forms', FormRouter);
app.use('/contacts', ContactRouter);

app.listen(port, () => { console.log(`Server is up on port ${port}`) });
