import {Router} from 'express';
import imageController from '../controllers/imageController';

const router=Router();

router.post('/upload-img',imageController.createImage)
router.get('/get-img/:bid',imageController.getImage)

export default router;