import database from '../src/models';

class unitService{

    //retrieve info for a particular unit
	static async getAUnit(id){
		try{
			const unit= await database.Unit.findOne({
                where:{id:Number(id)}
            })
            return unit
		}catch(error){
			throw error
		}
    }
    
    //add info for a unit
    static async addUnit(data){
        try{
            const updatedItem=await database.Unit.create(data)
            return updatedItem
        }catch(error){
            throw error
        }
    }


    //delete unit info. Warning: use this with caution
    static async deleteResd(id){
        try{
            const toDelete=await database.Unit.findOne({
                where:{id:Number(id)}
            })
            if(toDelete){
                const deletedItem=await database.Unit.destroy({
                    where:{id:Number(id)}
                })
                return deletedItem
            }
            return null
        }catch(error){
            throw error
        }
    }


    //update existing unit info
    static async updateUnit(id,data){
        try{
            const toUpdate= await database.Unit.findOne({
                where:{id:Number(id)}
            })
            if(toUpdate){
                const updatedItem = await database.Unit.update(data,{
                    where:{id:Number(id)}
                })
                return updatedItem
            }
            return null
        }catch(error){
            throw error
        }
    }

}

export default unitService;