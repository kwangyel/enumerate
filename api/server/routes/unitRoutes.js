import {Router} from 'express';
import unitController from '../controllers/unitController';

const router=Router();

router.post('/createunit',unitController.createUnit)
router.get('/getunits/:bid',unitController.getUnitBuilding)
router.get('/getunit/:id',unitController.getAUnit)

export default router;