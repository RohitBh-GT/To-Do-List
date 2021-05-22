import express from 'express';
import { getLists } from '../Controllers/todolist.js';

const router = express.Router();

router.get('/',getLists);

export default router;