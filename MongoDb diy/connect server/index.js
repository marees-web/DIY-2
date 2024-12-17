const express=require('express')
const app=express();
const MongoClient=require('mongodb').MongoClient
const mongourl="mongodb://localhost:27017/";
const port =2678;

MongoClient.connect(mongourl)
.then(()=>{
    console.log(`server is listening on port "${port}"`)
    console.log(`${port} is connected to "${mongourl}"`)
})
.catch(()=>{
    console.log("Failed to connect")
})