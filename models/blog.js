const mongoose=require('mongoose');
const { collection } = require('./userReg');

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    coverImageURL:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user-register'
    },
},{timestamps:true},{collection:"blog"});

module.exports=mongoose.model('blog',blogSchema);