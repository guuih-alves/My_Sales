import express from 'express';
import cors from 'cors';
import 'reflect-metadata'
import routes from './routes';
import 'express-async-errors';
import { errors } from 'celebrate'
import ErrorHandleMiddleware from '@shared/middlewares/ErrorHandleMiddleware';
import { AppDataSource } from '@shared/typeorm/data-source';
import { error } from 'console';

AppDataSource.initialize().then( async () => {
    const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());
app.use(ErrorHandleMiddleware.handleError);

 console.log('Connected to the Database')

app.listen(3333, () => {
    console.log('Server running started on port 3333')
})
})
.catch(error => {
    console.error('Failed to connect to the database', error)
})

