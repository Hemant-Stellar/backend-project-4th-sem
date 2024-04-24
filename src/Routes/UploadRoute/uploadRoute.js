import express from 'express';
import files from "../../Handlers/filesHelper/filesHelper.js"
const router = express.Router();
import { UploadController } from '../../Controllers/index.js';

// Create Note
router.post('/',files.docUpload.single('doc'),UploadController );

export default router;