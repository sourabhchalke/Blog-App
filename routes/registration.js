const express=require('express');
const router=express();
const bcrypt=require('bcrypt');
const UserReg=require('../models/userReg');

router.get('/registration',(req,res)=>{
    res.render('./registration.ejs');
});

router.post('/registration',async(req,res)=>{
    const {fullname,email,password,role}=req.body;
    console.log(fullname,email,password,role);

    try{

        if(!password || !fullname || !email || !role){
            res.status(400).send("Please provid details")
        }

        const payload = {
            fullname:fullname,
            email:email
        }

        const token = await jwt.sign(payload,SECRET_KEY,{expireIN:"1h"});
        cookie("token",token);

        const hashPassword= await bcrypt.hash(password,10);

        const createUser=await UserReg.create({fullname,email,password:hashPassword,role});
        res.render('/home');
        console.log("Data Inserted Successfull",createUser);

    }catch(error){
        res.status(400).send("Something went wrong").render('/registration');
    }

    res.send("Register Successfully");



});

module.exports=router;

