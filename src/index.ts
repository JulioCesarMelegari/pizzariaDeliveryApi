// eslint-disable-next-line linebreak-style
import path from 'node:path';
/* eslint-disable linebreak-style */
import { router } from './router';
/* eslint-disable linebreak-style */
import express from 'express';
import mongoose from 'mongoose';



mongoose.connect('mongodb://localhost:27017')
    .then(()=>{

        const app = express();
        const port = 3001;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port} and mongo connection`);

        });
    })
    .catch(()=> console.log('erro de conexao com o mongoDB'));

