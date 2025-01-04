require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const path=require('path');
const app=express();

app.use(morgan('dev'));

app.set('view engine','ejs');
// app.set('views',(path.resolve('./views')));

app.get('/',(req,res)=>{
    res.send("Get Route");
})

app.get('/home',(req,res)=>{
    res.render('home.ejs');
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on PORT : ${process.env.PORT}`);
})