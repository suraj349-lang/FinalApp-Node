const mongoose=require('mongoose');

const LoginSchema=new mongoose.Schema({
    mobileNumber:{
        type:Number,
        required:true,
        minLength:10
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
})


module.exports=mongoose.Schema('Login',LoginSchema);