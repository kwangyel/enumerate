import database from '../src/models';

class householdService{

    static async getHouseholdBuilding(bid){
        try{
            const households = database.Household.findAll({
                where:{building_id:Number(bid)}
            })
            return households 
        }catch(err){
            throw err
        }
    }

    static async createHousehold(data){
        try{
            const household = await database.Household.create(data)
            return household
        }catch(error){
            throw error
        }
    }
}
export default householdService;