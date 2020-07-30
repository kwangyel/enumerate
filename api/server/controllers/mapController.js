import mapServices from '../services/mapServices';
import Util from '../utils/Utils';

const util=new Util();

class mapController{

	static async getBuildingThimphu(req,res){
		try{
			const buildings= await mapServices.getBuildingThimphu();
			if(buildings.length > 0){
				const result = buildings.map((row)=>{
					let geojson=JSON.parse(row.st_asgeojson);
					geojson.properties = {id: row.objectid_1}
					return geojson;
				})
				util.setSuccess(200,'Buildings Retrieved',result);
			}else{
				util.setSuccess(200,'No buildings found');
			}
			return util.send(res);
		}catch(error){
			console.log(error);
			util.setError(400, error);
			return util.send(res);
		}
	}
}

export default mapController;
