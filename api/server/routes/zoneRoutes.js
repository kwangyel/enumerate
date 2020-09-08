import {Router} from 'express';
import zoneController from '../controllers/zoneController';

const router=Router();

router.get('/get-all-dzo',zoneController.getAllDzongkhags)
router.get('/get-zones/:dzo',zoneController.getZones)
router.get('/get-subzones/:zoneid',zoneController.getSubZones)

export default router;
