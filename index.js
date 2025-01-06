require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const path=require('path');
const mongoose=require('mongoose');
const app=express();

const register=require('./routes/registration');
const login=require('./routes/login');

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
app.use('/user',login);

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on PORT : ${process.env.PORT}`);
})