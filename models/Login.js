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


const LoginApiResponse=new mongoose.Schema({
    success:{
        type:Boolean,
        required:true
    },
    code:{
        type:Number,
        required:true
    },
    data:{
        type:LoginSchema,
        ref:LoginSchema
    }
})

module.exports=mongoose.Schema('Login',LoginSchema);
module.exports=mongoose.Schema('LoginApiResponse',LoginApiResponse);