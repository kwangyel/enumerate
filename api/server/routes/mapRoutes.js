import {Router} from 'express';
import mapController from '../controllers/mapController';

const router=Router();

router.get('/buildings',mapController.getBuildingThimphu)

export default router;
