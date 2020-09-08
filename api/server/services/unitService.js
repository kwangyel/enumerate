import database from '../src/models';

class unitService{
    static async getUnitBuilding(bid){
        try{
            const unit = database.Unit.findAll({
                where:{building_id:Number(bid)}
            })
            return unit 
        }catch(err){
            throw err
        }
    }

    static async getAUnit(id){
        try{
            const unit = database.Unit.findOne({
                where:{id:Number(id)}
            })
            return unit 
        }catch(err){
            throw err
        }
    }

    static async createUnit(data){
        try{
            const unit = await database.Unit.create(data)
            return unit
        }catch(error){
            throw error
        }
    }
}
export default unitService;