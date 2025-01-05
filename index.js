require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const path=require('path');
const app=express();

const register=require('./routes/registration');

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