import {Router} from 'express';
import checktoken from '../middlewares/checkToken'

const router=Router();

router.get('/protected',checktoken.checkToken,(req,res)=>{
    res.json("you are authenticated")
})

export default router;
