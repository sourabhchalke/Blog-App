const mongoose=require('mongoose');

const userRegister = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    // profileImg:{
    //     type:Image,
    //     default:'/public/profileimg'
    // },
    role:{
        type:String,
        enum:["user","admin"]
    }
},{collection:'user-register'});

module.exports=mongoose.model('user-register',userRegister);