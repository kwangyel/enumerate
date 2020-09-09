import {Router} from 'express';
import atmController from '../controllers/atmController';

const router=Router();

router.post('/createatm',atmController.createAtm)
router.get('/getatm/:bid',atmController.getAtmBuilding)
router.post('/create-bulk-atm',atmController.createBulkAtm)


export default router;