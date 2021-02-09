import { use } from 'chai';
import * as express from 'express';
import { API_VERSION } from '../config';
import { appRouter } from './routes';

const app = express();

app.use(appRouter);

export { app };
