import {Router} from 'express';
import shopController from '../controllers/shopController';

const router=Router();

router.post('/create-shop',shopController.createShop)
router.get('/get-shop/:bid',shopController.getShopBuilding)

export default router;