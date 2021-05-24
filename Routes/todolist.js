import express from 'express';
import { getLists,createList,deleteList,findParticularList,updateList } from '../Controllers/todolist.js';

const router = express.Router();

router.get('/',getLists);
router.post('/',createList);
router.delete('/:id',deleteList);
router.get('/:id',findParticularList);
router.patch('/:id',updateList);

export default router;