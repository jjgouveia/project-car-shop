import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json('teste');
});

export default router;