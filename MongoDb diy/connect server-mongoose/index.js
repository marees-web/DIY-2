const express=require('express');
const app= express();
const port =1234;
const mongoose=require('mongoose');
const mongodb="mongodb://localhost:27017/"
mongoose.connect(mongodb)
.then(()=>{console.log(`mongodb connected on port ${1234}`);
  console.log(`It's connected on url ${mongodb}`)
})
.catch(()=>{
    console.log("failed to connect")
})
    
    
    

