const express=require('express');
const app=express()
const bcrypt=require('bcryptjs');
const password="mypassword290500";

bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log('password:',hash);
    })
})