import userService from '../services/userService'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Util from '../utils/Utils'
const util=new Util();

class userController{
    static async createHash(req,res){
        const saltrounds = 10
        const {pass} = req.params
        bcrypt.hash(pass,saltrounds,(err,hash)=>{
            res.send(hash) 
        })
    }
    static async login(req,res){
        try{
            const username = req.body.username
            const password = req.body.password
            
            if(username && password){
                const hash = await userService.getPassHash(username)
                if(hash==null){
                    util.setFailure(200,"username or password incorrect")
                    return util.send(res)
                }

                let token = jwt.sign({username:username},
                    process.env.SECRET_KEY,
                    {expiresIn:"24h"})
                
                bcrypt.compare(password,hash,(err,ismatch)=>{
                    util.setData(null)
                    if(err){
                        console.log(err)
                        util.setError(400,"an error occured")
                        return util.send(res)
                    }
                    if(ismatch){
                        util.setSuccess(200,"Logged in")
                        util.setData({
                            token:token
                        })
                        return util.send(res)
                    }else{
                        util.setFailure(200,"username or password incorrect")
                        return util.send(res)
                    }
                })
            }else{
                util.setError(400,"username or password not set")
                return util.send(res)
            }
        }catch(error){
            console.log(error)
            util.setError(400,"An error occured")
            return util.send(res)
        }
    }
}

export default userController;