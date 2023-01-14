import { Router } from 'express';
import Cars from './cars.routes';
import Motorcycle from './motorcycle.routes';

const routes = Router();

routes.use('/cars', Cars);
routes.use('/motorcycles', Motorcycle);

export default routes;