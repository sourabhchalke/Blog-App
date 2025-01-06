require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const path=require('path');
const mongoose=require('mongoose');
const app=express();

const register=require('./routes/registration');

mongoose.connect(process.env.url)
.then(()=>{
    console.log("Database Connected Successfull");
})
.catch((error)=>{
    console.log(error.stack);
})

app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

app.set('view engine','ejs');
// app.set('views',(path.resolve('./views')));

app.use('/user',register);

app.get('/',(req,res)=>{
    res.send("Get Route");
})

app.get('/home',(req,res)=>{
    res.render('home.ejs');
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on PORT : ${process.env.PORT}`);
})