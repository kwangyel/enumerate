import database from '../src/models';

class imageService{

    //retrieve img or a particular building
	static async getAImg(bldg_id){
		try{
			const bldg= await database.image.findOne({
                where:{bldg_id:Number(bldg_id)}
            })
            return bldg 
		}catch(error){
			throw error
		}
    }
    
    //add info for a unit
    static async addImg(data){
        try{
            const updatedItem=await database.image.create(data)
            return updatedItem
        }catch(error){
            throw error
        }
    }

    static async bulkAddImg(data){
        try {
            const createdItem = await database.image.bulkCreate(data)
            return createdItem
        }catch(error){
            throw error
        }
    }


    //delete unit info. Warning: use this with caution
    static async deleteImg(id){
        try{
            const toDelete=await database.image.findOne({
                where:{id:Number(id)}
            })
            if(toDelete){
                const deletedItem=await database.image.destroy({
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
    static async updateImg(id,data){
        try{
            const toUpdate= await database.image.findOne({
                where:{id:Number(id)}
            })
            if(toUpdate){
                const updatedItem = await database.image.update(data,{
                    where:{id:Number(id)}
                })
                return updatedItem
            }
            return null
        }catch(error){
            throw error
        }
    }

    static async blukUpdateRA(data){
        try{
            const updatedItem = await database.image.bulkCreate(data,{
                updateOnDuplicate:[]
            })
            return updatedItem
        }catch(error){
            throw error
        }
    }

}

export default imageService;