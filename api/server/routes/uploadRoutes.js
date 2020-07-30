import {Router} from 'express'
import multer from 'multer'
import path from 'path'

const router=Router();
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'uploads/')
    },

    filename: function(req,file,cb){
        cb(null,file.fieldname+ '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage}).single('images')

router.post('/upload',(req,res)=>{
    upload(req,res,function(err){
        if(err instanceof multer.MulterError){
          return res.json({
            success: false,
            message: err
          })
        }else if(err){
          return res.json({
            success: false,
            message: err
          })
        }
        return res.json({
            success: true,
            message: req.file.filename
        })

    })
})
export default router;
