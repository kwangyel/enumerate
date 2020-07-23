import express from 'express'
import bodyparser from 'body-parser'
import config from 'dotenv'
import cors from 'cors'
import enumRoutes from './server/routes/enumRoutes'
import userRoutes from './server/routes/userRoutes'

config.config()

const app=express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
	res.send("Welcome to the enumerate API")
})
app.use(userRoutes)
app.use(enumRoutes)

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
})

export default app;
