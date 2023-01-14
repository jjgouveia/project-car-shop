import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/', (req, res, next) => new CarController(req, res, next).createCar());
router.put('/:id', (req, res, next) => new CarController(req, res, next).update());
router.get('/:id', (req, res, next) => new CarController(req, res, next).getACarById());
router.delete('/:id', (req, res, next) => new CarController(req, res, next).destroy());
router.get('/', (req, res, next) => new CarController(req, res, next).getAllCars());

export default router;