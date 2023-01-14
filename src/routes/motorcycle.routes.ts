import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/', (req, res, next) => new MotorcycleController(req, res, next).createMotorcycle());
router.get('/:id', (req, res, next) => new MotorcycleController(req, res, next).getAMotoById());
router.put('/:id', (req, res, next) => new MotorcycleController(req, res, next).update());
router.delete('/:id', (req, res, next) => new MotorcycleController(req, res, next).destroy());
router.get('/', (req, res, next) => new MotorcycleController(req, res, next).getAllMoto());

export default router;