const express=require('express');
const userReg = require('../models/userReg');
const router=express();

router.get('/addblog',(req,res)=>{
     res.render('addblog');
})

module.exports=router;