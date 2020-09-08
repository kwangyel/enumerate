import database from '../src/models';

class imageService{
    static async getImage(bid){
        try{
            const image = database.Image.findAll({
                where:{building_id:Number(bid)}
            })
            return image 
        }catch(err){
            throw err
        }
    }

    static async createImage(data){
        try{
            const image = await database.Image.create(data)
            return image 
        }catch(error){
            throw error
        }
    }
}
export default imageService;