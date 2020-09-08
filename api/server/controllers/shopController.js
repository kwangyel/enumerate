import shopService from '../services/shopService'
import Util from '../utils/Utils'
import unitService from '../services/unitService'

const util=new Util();

class shopController{
    static async getShopBuilding(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const shops = await shopService.getShopBuilding(bid)
            if(shops.length){
                util.setSuccess(200,"Got shops")
                util.setData(shops)
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

    static async createShop(req,res){
        const data = req.body
        const unit_id = req.body.unit_id
        const building_id = req.body.building_id
        util.setData(null)

        if(!building_id || !unit_id){
            util.setError(400,"Building not set")
            return util.send(res)
        }
        try{
            const unit = await unitService.getAUnit(unit_id)
            if(!unit){
               util.setError(400,"unit not valid") 
               return util.send(res)
            }
            const shops = await shopService.createShop(data)
            if(shops){
                util.setSuccess(200,"created shop")
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
}
export default shopController;