import buildingService from '../services/buildingService'
import Util from '../utils/Utils'
import { create } from 'domain';

const util=new Util();

class buildingController{
    static async getBuildingJson(req,res){
        const {zoneid} = req.params
        try{
            const buildings = await buildingService.getBuildingInZone(zoneid)
            if(buildings.length){
                const result = buildings.map((row)=>{
                    let geojson = {"type":"Point"}
                    geojson.properties = {building_id:row.id,status:row.status}
                    geojson.coordinates = [row.lng,row.lat]
                    return geojson
                })
                return res.json(result)
            }
            return res.json({
                "msg":"error sending json"
            })
        }catch(err){
            console.log(err);
            return res.json({
                "msg":"error sending json"
            })
        }
    }
    static async markBuildingComplete(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const updated = await buildingService.markBuildingComplete(id);
            if(updated){
                util.setSuccess(200,"Got buildings")
                return util.send(res)
            }
            util.setFailure(200,"cant update")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"error")
            return util.send(res)
        }
    }

    static async getBuildingInZone(req,res){
        const {zoneid} = req.params
        util.setData(null)

        try{
            const buildings = await buildingService.getBuildingInZone(zoneid)
            if(buildings.length){
                util.setSuccess(200,"Got buildings")
                util.setData(buildings)
                buildings.map((row)=>{
                    let geojson = {"type":"Point"}
                    geojson.properties = {building_id:row.id,status:row.status}
                    geojson.coordinates = [row.lng,row.lat]
                    return geojson
                })
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

    static async getABuilding(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const buildings = await buildingService.getABuilding(id)
            if(buildings){
                util.setSuccess(200,"got building")
                util.setData(buildings)
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

    static async updateBuilding(req,res){
        const building_id = req.body.building_id
        const data = req.body
        util.setData(null)
        if(!building_id){
            util.setError(400,"Building id is not set")
            return util.send(res)
        }

        try{
            const updateBuilding = await buildingService.updateBuilding(building_id,data)
            console.log(updateBuilding)
            if(updateBuilding[0]==1){
                util.setSuccess(200,"updated building")
                return util.send(res)
            }
            util.setFailure(200,"Cannot update")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }
    
    static async createBuilding(req,res){
        const data = req.body
        util.setData(null)

        try{
            const createBuilding = await buildingService.createBuilding(data)
            
            if(createBuilding){
                util.setSuccess(200,"created building")
                util.setData(createBuilding)
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

    static async deleteBuilding(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const deleteBuilding = await buildingService.deleteBuilding(id)
            if(deleteBuilding){
                util.setSuccess(200,"Deleted building")
                return util.send(res)
            }
            util.setFailure(200,"Cannot delete building")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

}
export default buildingController;