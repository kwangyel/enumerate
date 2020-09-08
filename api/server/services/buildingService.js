import database from '../src/models';

class buildingService{
    static async getBuildingInZone(zoneid){
        try{
            const buildings = database.Building.findAll({
                where:{sub_zone_id:Number(zoneid)}
            })
            return buildings
        }catch(err){
            throw err
        }
    }

    static async getABuilding(id){
        try{
            const building = database.Building.findOne({
                where:{id:Number(id)}
            })
            return building
        }catch(err){
            throw err
        }
    }

    static async updateBuilding(building_id,data){
        try{
            const building = database.Building.findOne({
                where:{id:Number(building_id)}
            })
            if(building){
                const updatedBuilding = await database.Building.update(data,{
                    where: {id: Number(building_id)}
                })
                return updatedBuilding
            }
            return null
        }catch(err){
            throw err
        }
    }

    static async createBuilding(data){
        try{
            const building = await database.Building.create(data)
            return building
        }catch(error){
            throw error
        }
    }

    static async deleteBuilding(id){
        try{
            const toDelete=await database.Building.findOne({
                where:{id:Number(id)}
            })

            if(toDelete){
                const deletedItem=await database.Building.destroy({
                    where:{id:Number(id)}
                })
                return deletedItem
            }
            return null
        }catch(error){
            throw error
        }
    }
}
export default buildingService;