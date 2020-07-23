import database from '../src/models';

class residentService{

    //retrieve info for a particular Resident 
	static async getAResd(id){
		try{
			const resd= await database.Resident.findOne({
                where:{id:Number(id)}
            })
            return resd
		}catch(error){
			throw error
		}
    }
    
    //add info for a Resident 
    static async addResd(data){
        try{
            const updatedItem=await database.Resident.create(data)
            return updatedItem
        }catch(error){
            throw error
        }
    }


    //delete building info. Warning: use this with caution
    static async deleteResd(id){
        try{
            const toDelete=await database.Resident.findOne({
                where:{id:Number(id)}
            })
            if(toDelete){
                const deletedItem=await database.Resident.destroy({
                    where:{id:Number(id)}
                })
                return deletedItem
            }
            return null
        }catch(error){
            throw error
        }
    }


    //update existing building info
    static async updateResd(id,data){
        try{
            const toUpdate= await database.Resident.findOne({
                where:{id:Number(id)}
            })
            if(toUpdate){
                const updatedItem = await database.Resident.update(data,{
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

export default residentService;