import express from 'express'
import bodyparser from 'body-parser'
import config from 'dotenv'
import cors from 'cors'
import enumRoutes from './server/routes/enumRoutes'
import userRoutes from './server/routes/userRoutes'
import checktoken from './server/middlewares/checkToken'
import uploadRoutes from './server/routes/uploadRoutes'
import mapRoutes from './server/routes/mapRoutes'

config.config()

const app=express()
const port = process.env.PORT || 8080

//basic starter middlewares
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
	res.send("Welcome to the enumerate API")
})
app.use(express.static(__dirname + '/public'));

//protected enum routes
app.use('/enum',checktoken.checkToken,enumRoutes)

//login routes
app.use(userRoutes)

//image upload path
app.use(uploadRoutes)

//map routes
app.use('/map',mapRoutes)

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
})

export default app;
