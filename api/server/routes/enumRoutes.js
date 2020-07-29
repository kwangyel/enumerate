import {Router} from 'express';
import checktoken from '../middlewares/checkToken'
import buildingController from '../controllers/buildingController'
import unitController from '../controllers/unitController'
import resdController from '../controllers/resdController'

const router=Router();

router.post('/add-building',buildingController.addBldg)
router.post('/add-unit',unitController.addUnit)
router.post('/add-resd',resdController.addResd)

router.post('/update-building',buildingController.updateBldg)
router.post('/update-unit',unitController.updateUnit)
router.post('/update-resd',resdController.updateResd)

router.get('/get-building',buildingController.getABldg)
router.get('/get-unit',unitController.getAUnit)
router.get('/get-resd',resdController.getAResd)

export default router;
