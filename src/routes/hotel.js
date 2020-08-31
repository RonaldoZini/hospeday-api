import { Router } from 'express';

const router = Router();

import { create, findAll, findById, remove, update } from '../controllers/hotel.controller';

router.post('/', create);
router.get('/', findAll);
router.get('/:id', findById);
router.delete('/:id', remove);
router.put('/:id', update);

export default router;


