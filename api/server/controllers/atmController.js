import atmService from '../services/atmService'
import buildingService from '../services/buildingService'
import Util from '../utils/Utils'
import { create } from 'domain';

const util=new Util();

class atmController{
    static async getAtmBuilding(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const atms = await atmService.getAtmBuilding(bid)
            if(atms.length){
                util.setSuccess(200,"Got atm")
                util.setData(atms)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

    static async updateAtm(req,res){
        const id = req.body.id
        const data = req.body
        try{
            const atms = await atmService.updateAtm(id,data)
            if(atms.length){
                util.setSuccess(200,"updated atms")
                return util.send(res)
            }
            util.setFailure(200,"Could not update atm")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

    static async createAtm(req,res){
        const data = req.body
        const building_id= req.body.building_id
        util.setData(null)

        if(!building_id){
            util.setError(400,"Building not set")
            return util.send(res)
        }

        try{
            const building = await buildingService.getABuilding(building_id)
            if(!building){
               util.setError(400,"Building not valid") 
               return util.send(res)
            }
            const createAtm = await atmService.createAtm(data)
            if(createAtm){
                util.setSuccess(200,"created atm")
                return util.send(res)
            }
            util.setFailure(200,"Cannot create")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

    static async createBulkAtm(req,res){
        const atms = req.body.atms
        util.setData(null);

        if(!atms){
            util.setError(400,"data not set")
            return util.send(res)
        }
        try{
            const atm = await atmService.createBulkAtm(atms)
            if(atm){
                util.setSuccess(200,"Inserted atms")
                return util.send(res)
            }
            util.setFailure(200,"Cannot create atsm")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"error")
            return util.send(res)
        }
    }

    static async deleteAtm(req,res){
        const {id} = req.params

        try{
            const deleteAtm = await atmService.deleteAtm(id)
            if(deleteAtm){
                util.setSuccess(200,"Deleted atm")
                return util.send(res)
            }
            util.setFailure(200,"Cannot delete atm")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

}
export default atmController;