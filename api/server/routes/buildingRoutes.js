import {Router} from 'express';
import buildingController from '../controllers/buildingController';

const router=Router();

router.get('/get-buildings/:zoneid',buildingController.getBuildingInZone)
router.get('/get-building/:id',buildingController.getABuilding)
router.post('/updatebuilding',buildingController.updateBuilding)
router.post('/createbuilding',buildingController.createBuilding)
router.delete('/deletebuilding/:id',buildingController.deleteBuilding)


export default router;