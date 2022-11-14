const express=require('express')
const app=express()
const data1=require("./Routes/bollywood")

app.use("/home",data1)

app.listen(process.env.PORT||8080,()=>{
    console.log("server is running")
})