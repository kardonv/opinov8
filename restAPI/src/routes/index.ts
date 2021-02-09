import { Router } from 'express';
import { API_VERSION } from '../../config';
import { loanRouter } from './LoanRouter';

const appRouter = Router();

appRouter.use(API_VERSION, loanRouter);

export { appRouter };
