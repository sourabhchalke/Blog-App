const express=require('express');
const userReg = require('../models/userReg');
const router=express();

router.get('/addblog',(req,res)=>{
     res.render('addblog');
});

router.post('/addblog',(req,res)=>{
    console.log(req.body);
    res.send("Blog Created");
})

module.exports=router;