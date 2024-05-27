
require('dotenv').config() //When you install first column dependies

const express = require('express')
const app = express();

//When use your app any json object or form fill up
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Setup our routes dependence of versions
if(process.env.VERSION == 'v1'){
    
    const routers = require('./src/api/v1/routers') //Connect your routes here

    app.use('/api/country',routers) //Can define path or respose of your apis path
}

app.get('/*',(req,res)=>{
    return res.status(201).json({success:true,message:`Welcome in country/states/city data api version:${process.env.VERSION}`})
})

const Server = process.env.SERVER || 'http://localhost';
const Port = process.env.PORT || 8000 ;

app.listen(Port,()=> console.info(`Application listen at ${Server}:${Port}`))