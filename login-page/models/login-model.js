
let mongoose=require('mongoose')
let loginSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:String,
    password:String,
    phone:String
});

let Login= mongoose.model("login",loginSchema);

module.exports=Login;