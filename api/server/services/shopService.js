import database from '../src/models';

class shopService{
    static async getShopBuilding(bid){
        try{
            const shop = database.Shop.findAll({
                where:{building_id:Number(bid)}
            })
            return shop 
        }catch(err){
            throw err
        }
    }

    static async createShop(data){
        try{
            const shop = await database.Shop.create(data)
            return shop 
        }catch(error){
            throw error
        }
    }
}
export default shopService;