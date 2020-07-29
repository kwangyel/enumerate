import imageService from '../services/imageService'
import Util from '../utils/Utils'
const util=new Util();

class imageController{
    //get a building by id
    static async getAImg(req,res){
        try{
            const id = req.body.id;
            const item = await imageService.getAImg(id);
            if(!item){
                util.setError(404,"Not found")
            }else{
                util.setSuccess(200,"Found",item)
            }
            return util.send(res);
        }catch(error){
            util.setError(404,error)
            return util.send(res)
        }
    }

    //update building for a building id
    static async updateImg(req,res){
        try{
            const id =req.body.id;
            const data=req.body;

            const updatedItem= await imageService.updateImg(id,data);

            if(!updatedItem){
                util.setError(404,'Cannot be updated');
            }else{
                util.setSuccess(200,'Data updated',updatedItem);
            }
            return util.send(res);
        }catch(error){
			util.setError(404,error);
			return util.send(res);
		}
    }

    //delete building info. Use with caution
    static async deleteImg(req,res){
        try{
            const id=req.body.id;

            const item= await imageService.deleteImg(id);
            if(!item){
                util.setError(404,'Data could not be deleted');
            }else{
                util.setSuccess(200,'Data deleted',item);
            }
            return util.send(res)
        }catch(error){
            util.setError(404,error)
            return util.send(res)
        }
    }

    //Add a building
    static async addImg(req,res){
        try{
            const data=req.body;

            const updatedItem= await imageService.addImg(data);
            if(!updatedItem){
                util.setError(404,'Data cannot be added');
            }else{
                util.setSuccess(200,'Data added',updatedItem);
            }
            return util.send(res);
        }catch(error){
			util.setError(404,error);
			return util.send(res);
		}
    }

    static async bulkAdd(req,res){
        try{
            const data = req.body
            const addedItem = await imageService.bulkAddImg(data)

            if(!addedItem){
                util.setError(404,'Data cannot be added');
            }else{
                util.setSuccess(200,'Data added',addedItem);
            }
            return util.send(res);
        }catch(error){
			util.setError(404,error);
			return util.send(res);
		}
    }

    static async bulkEdit(req,res){
        try{
            const data = req.body;
            const addedItem = await imageService.bulkEdit(data)

            if(!addedItem){
                util.setError(404,'Data cannot be added');
            }else{
                util.setSuccess(200,'Data added',addedItem);
            }
            return util.send(res);
        }catch(error){
            util.setError(404,error)
            return util.send(res)
        }
    }
}

export default imageController;