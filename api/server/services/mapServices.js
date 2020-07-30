import database from '../src/models';

class mapServices{

	static async getBuildingThimphu(){
		try {
			const result = await database.sequelize.query('select ST_AsGeoJSON(geom),objectid_1 from building_point;')
			return result[0]
		}catch (error){
			console.log(error)
		}
	}
}

export default mapServices;
