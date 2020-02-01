import { Router } from 'express';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Users
routes.post('/users', UserController.store);

// Session
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

// Recipient
routes.post('/recipient', RecipientController.store);
routes.put('/recipient', RecipientController.update);

// Users
routes.put('/users', UserController.update);

export default routes;
