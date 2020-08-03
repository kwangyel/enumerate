import database from '../src/models';

class buildingService{

    static async getAllBid(){
        try{
            const data = await database.building.findAll({
                attributes: ['bldg_id']
            })
            return data
        }catch(error){
            throw error
        }

    }

    //retrieve info for a particular building
	static async getABldg(bldg_id){
		try{
			const bldg= await database.building.findOne({
                where:{bldg_id:Number(bldg_id)}
            })
            return bldg
		}catch(error){
			throw error
		}
    }
    
    //add info for building
    static async addBldg(data){
        try{
            const updatedItem=await database.building.create(data)
            return updatedItem
        }catch(error){
            throw error
        }
    }


    //delete building info. Warning: use this with caution
    static async deleteBldg(bldg_id){
        try{
            const toDelete=await database.building.findOne({
                where:{bldg_id:Number(bldg_id)}
            })
            if(toDelete){
                const deletedItem=await database.building.destroy({
                    where:{bldg_id:Number(bldg_id)}
                })
                return deletedItem
            }
            return null
        }catch(error){
            throw error
        }
    }


    //update existing building info
    static async updateBldg(bldg_id,data){
        try{
            const toUpdate= await database.building.findOne({
                where:{bldg_id:Number(bldg_id)}
            })
            if(toUpdate){
                const updatedItem = await database.building.update(data,{
                    where:{bldg_id:Number(bldg_id)}
                })
                return updatedItem
            }
            return null
        }catch(error){
            throw error
        }
    }

}

export default buildingService;
