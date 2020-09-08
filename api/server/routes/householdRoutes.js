import {Router} from 'express';
import householdController from '../controllers/householdController';

const router=Router();

router.post('/create-household',householdController.createHousehold)
router.get('/get-household/:bid',householdController.getHouseholdBuilding)

export default router;