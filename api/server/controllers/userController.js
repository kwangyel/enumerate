import userService from '../services/userService'
import jwt from 'jsonwebtoken'
import config from '../config'

class userController{
    static async login(req,res){
        try{
            const username = req.body.username
            const password = req.body.password
            
            if(username && password){
                const block = await userService.login(username,password)
                if(block){
                    let token = jwt.sign({username:username},
                       config.secret,
                       {expiresIn:"24h"})
                    res.json({
                        success:true,
                        msg:'Authenticated',
                        token:token,
                        block:block
                    })
                }else{
                    res.json({
                        success:false,
                        msg:'Authentication failed'
                    })
                }
            }else{
                res.json({
                    success:false,
                    msg:'Username or password empty'
                })
            }
        }catch(error){
            res.json({
                success:false,
                msg:"Login error: "+error
            })
        }
    }
}

export default userController;