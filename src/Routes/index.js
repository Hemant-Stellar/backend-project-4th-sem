import uploadRoute from './UploadRoute/uploadRoute.js';

const router = express.Router();

router.use('/upload',uploadRoute);

export default router;