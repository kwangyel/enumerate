import buildingService from '../services/buildingService'
import Util from '../utils/Utils'
const util=new Util();

class buildingController{
    //get a building by id
    static async getAllBid(req,res){
        try {
            const data = await buildingService.getAllBid()
            if(!data){
                util.setError(404,"Not found")
            }else{
                util.setSuccess(200,"Found",data)
            }
            return util.send(res)
        }catch(error){
            util.setError(404,error)
            return util.send(res)
        }
    }
    static async getABldg(req,res){
        try{
            const bid = req.body.bid;
            if(!bid){
                util.setError(404,"Bid not set");
                util.send(res)
            }
            const bldg = await buildingService.getABldg(bid);
            if(!bldg){
                util.setError(404,"Not found")
            }else{
                util.setSuccess(200,"Found",bldg)
            }
            return util.send(res);
        }catch(error){
            util.setError(404,error)
            return util.send(res)
        }
    }

    //update building for a building id
    static async updateBldg(req,res){
        try{
            const bid=req.body.bldg_id;
            const data=req.body;

            if(!bid){
                util.setError(404,'Building ID not set');
                return util.send(res);
            }
            const updatedItem= await buildingService.updateBldg(bid,data);

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
    static async deleteBldg(req,res){
        try{
            const bid=req.body.bid;

            const item= await buildingService.deleteBldg(bid);
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
    static async addBldg(req,res){
        try{
            const data=req.body;
            const bid = req.body.bldg_id;

            if(!bid){
                util.setError(404,"Building id not set")
                return util.send(res)
            }

            const updatedItem= await buildingService.addBldg(data);
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

export default buildingController;
