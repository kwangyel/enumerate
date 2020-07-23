import database from '../src/models';

class resdOccpService{

    //retrieve info for a resident by occupation for a resident
	static async getARO(resd_id){
		try{
			const ro= await database.resd_occp.findOne({
                where:{resd_id:Number(resd_id)}
            })
            return ro 
		}catch(error){
			throw error
		}
    }
    
    static async addRO(data){
        try{
            const updatedItem=await database.resd_occp.create(data)
            return updatedItem
        }catch(error){
            throw error
        }
    }


    //delete unit info. Warning: use this with caution
    static async deleteRO(resd_id){
        try{
            const toDelete=await database.resd_occp.findOne({
                where:{resd_id:Number(resd_id)}
            })
            if(toDelete){
                const deletedItem=await database.resd_occp.destroy({
                    where:{resd_id:Number(resd_id)}
                })
                return deletedItem
            }
            return null
        }catch(error){
            throw error
        }
    }


    //update existing unit info
    static async updateRO(resd_id,data){
        try{
            const toUpdate= await database.resd_occp.findOne({
                where:{resd_id:Number(resd_id)}
            })
            if(toUpdate){
                const updatedItem = await database.resd_occp.update(data,{
                    where:{resd_id:Number(resd_id)}
                })
                return updatedItem
            }
            return null
        }catch(error){
            throw error
        }
    }

}

export default resdOccpService;