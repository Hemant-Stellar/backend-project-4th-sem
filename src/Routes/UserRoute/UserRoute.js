import express from 'express';
import { Controller } from '../../Controllers/index.js';
const router = express.Router();

router.use('/addData',Controller.addData);
router.use('/rankByEmail',Controller.getRankByEmail);
router.use('/rankRange',Controller.getRankInRange);
export default router;