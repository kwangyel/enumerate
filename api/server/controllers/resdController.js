import resdService from '../services/residentService'
import Util from '../utils/Utils'
const util=new Util();

class resdController{
    //get a building by id
    static async getAResd(req,res){
        try{
            const id = req.body.id;
            const item = await resdService.getAUnit(id);
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
    static async updateResd(req,res){
        try{
            const id =req.body.id;
            const data=req.body;

            if(!id){
                util.setError(404,'Unit ID not set');
                return util.send(res);
            }

            const updatedItem= await resdService.updateResd(id,data);

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
    static async deleteResd(req,res){
        try{
            const id=req.body.id;

            const item= await resdService.deleteResd(id);
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
    static async addResd(req,res){
        try{
            const data=req.body;

            const updatedItem= await resdService.addResd(data);
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
}

export default resdController;