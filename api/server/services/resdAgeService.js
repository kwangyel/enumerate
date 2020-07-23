import database from '../src/models';

class resdAgeService{

    //retrieve info for a resident by occupation for a resident
	static async getARA(resd_id){
		try{
			const ro= await database.resd_age.findAll({
                where:{resd_id:Number(resd_id)}
            })
            return ro 
		}catch(error){
			throw error
		}
    }
    
    static async addRA(data){
        try{
            const createdItem=await database.resd_age.create(data)
            return createdItem
        }catch(error){
            throw error
        }
    }
    
    //bulk create RA
    static async bulkAddRA(data){
        try {
            const createdItem = await database.resd_age.bulkCreate(data)
            return createdItem
        }catch(error){
            throw error
        }
    }

    //delete unit info. Warning: use this with caution
    static async deleteRA(id){
        try{
            const toDelete=await database.resd_age.findOne({
                where:{id:Number(id)}
            })
            if(toDelete){
                const deletedItem=await database.resd_age.destroy({
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
    static async updateRA(id,data){
        try{
            const toUpdate= await database.resd_age.findOne({
                where:{id:Number(id)}
            })
            if(toUpdate){
                const updatedItem = await database.resd_age.update(data,{
                    where:{id:Number(id)}
                })
                return updatedItem
            }
            return null
        }catch(error){
            throw error
        }
    }

    //bulk update resident by age
    static async blukUpdateRA(data){
        try{
            const updatedItem = await database.resd_age.bulkCreate(data,{
                updateOnDuplicate:[]
            })
            return updatedItem
        }catch(error){
            throw error
        }
    }

}

export default resdOccpService;