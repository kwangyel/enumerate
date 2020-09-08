import database from '../src/models';

class atmService{

    static async getAtmBuilding(bid){
        try{
            const atm = database.Atm.findAll({
                where:{building_id:Number(bid)}
            })
            return atm 
        }catch(err){
            throw err
        }
    }

    static async updateAtm(id,data){
        try{
            const atm = database.Atm.findOne({
                where:{id:Number(id)}
            })
            if(atm.length){
                const  updateAtm = await database.Atm.update(data,{
                    where: {id: Number(id)}
                })
                return updateAtm
            }
            return null
        }catch(err){
            throw err
        }
    }

    static async createAtm(data){
        try{
            const atm = await database.Atm.create(data)
            return atm 
        }catch(error){
            throw error
        }
    }

    static async deleteAtm(id){
        try{
            const toDelete=await database.Atm.findOne({
                where:{id:Number(id)}
            })

            if(toDelete.length){
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
export default atmService;