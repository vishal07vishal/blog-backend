const express=require('express')
const app=express()
const data=require("../Controllers/bollywood");



const dataRouter=express.Router()//parent
dataRouter.route('/bollywood')//child
.get(data.bollywoodData)
module.exports=dataRouter