require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const path=require('path');
const mongoose=require('mongoose');
const app=express();

const register=require('./routes/registration');
const login=require('./routes/login');
const addblog=require('./routes/addblog');

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

app.use('/',register);
app.use('/',login);
app.use('/',addblog);


app.get('/',(req,res)=>{
    res.render('first');
})

app.get('/logout',(req,res)=>{
     res.render('first');
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on PORT : ${process.env.PORT}`);
})