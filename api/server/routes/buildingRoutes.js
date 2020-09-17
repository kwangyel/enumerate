import {Router} from 'express';
import buildingController from '../controllers/buildingController';

const router=Router();

router.get('/get-buildings/:zoneid',buildingController.getBuildingInZone)
router.get('/get-buildings-json/:zoneid',buildingController.getBuildingJson)
router.get('/get-building/:id',buildingController.getABuilding)
router.get('/mark-complete/:id',buildingController.markBuildingComplete)
router.get('/mark-progress/:id',buildingController.markBuildingProgress)
router.post('/updatebuilding',buildingController.updateBuilding)
router.post('/createbuilding',buildingController.createBuilding)
router.delete('/deletebuilding/:id',buildingController.deleteBuilding)


export default router;