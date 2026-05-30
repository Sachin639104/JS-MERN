let mongoose=require('mongoose');

let studentSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:String,
    phone:String,
    course:String
});

let Student= mongoose.model("student",studentSchema);

module.exports=Student;