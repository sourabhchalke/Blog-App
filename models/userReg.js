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
    profileImg:{
        type:Image,
        default:''
    },
    role:{
        type:String,
        enum:["User","Admin"]
    }
},{collection:'user-register'});

module.exports=mongoose.model('user-register',userRegister);