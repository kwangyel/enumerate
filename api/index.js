import express from 'express'
import bodyparser from 'body-parser'
import config from 'dotenv'
import cors from 'cors'
import userRoutes from './server/routes/userRoutes'
import checktoken from './server/middlewares/checkToken'
import zoneRoutes from './server/routes/zoneRoutes'
import buildingRoutes from './server/routes/buildingRoutes'
import atmRoutes from './server/routes/atmRoutes'
import unitRoutes from './server/routes/unitRoutes'
import householdRoutes from './server/routes/householdRoutes'
import shopRoutes from './server/routes/shopRoutes'
import imageRoutes from './server/routes/imageRoutes'
import fs from 'fs'
import util from 'util'


config.config()

const app=express()
const port = process.env.PORT || 8080

if(process.env.NODE_ENV == "production"){
	var log_file = fs.createWriteStream(__dirname + '/debug.log',{flags: 'w'})
	console.log = function(d){
		log_file.write(util.format(d)+'\n');
	}
}

//basic starter middlewares
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
	res.send("Welcome to the enumerate API")
})
app.use(express.static(__dirname + '/public'));

//protected enum routes
//app.use('/enum',checktoken.checkToken,enumRoutes)

//login routes
app.use(userRoutes)

//zone router
app.use(zoneRoutes)

app.use(buildingRoutes)
app.use(atmRoutes)
app.use(unitRoutes)
app.use(householdRoutes)
app.use(shopRoutes)
app.use(imageRoutes)

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
	console.log(process.env.SECRET_KEY)
})

export default app;
