
let mongoose = require('mongoose');
let Student =require('../models/studentModel.js')

    let home_student= async(req,res)=>{
        try{
    let msg=req.query.msg;
    let studentDetails= await Student.find();
    res.render('home',{studentDetails,msg})
}catch(err){
    res.render('500',{message:err})
}
    }

    let show_details = async(req,res)=>{
 try{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.render('404',{message:'invalid Id !'})

    let stu= await Student.findById(req.params.id)
    if(!stu)
        return res.render('404',{message:' Student not found!'})
    res.render('show-details',{stu})
}
catch(err){
    res.render('500',{message:err})

}
    }

    let add_student = (req,res)=>res.render('add-student')


    let add_students = async(req,res)=>{
        try{
    let {name,email,phone,course}=req.body;
    let stu = await Student.create({name,email,phone,course})
    if(stu)
    res.redirect('/?msg=record has been saved!!')
}catch(err){
    res.render('500',{message:err})

}
    }

    
    let edit= async(req,res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.render('404',{message:'invalid id'})

    let stu= await Student.findById(req.params.id)
    if(!stu)
         return res.render('404',{message:' Student not found!'})
    res.render('edit-student',{stu})
}
catch(err){
    res.render('500',{message:err})
}
}



    let edit_student= async(req,res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.render('404',{message:'invalid err'})

    let stu= await Student.findByIdAndUpdate(req.params.id,req.body)
    if(!stu)
        return res.render('500',{message:'student mot found!'})
        res.redirect('/?msg=record has been updated!!')
}catch(err){
 res.render('500',{message:err})
}}



    let delete_student= async(req,res)=>{
        try{
           if(!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.render('404',{message:'invalid id!'})
    let stu= await Student.findByIdAndDelete(req.params.id,req.body)
    if(!stu)
         return res.render('404',{message:'student not found!'})

        res.redirect('/?msg=record has been delete!!')
}catch(err){
  res.render('500',{message:err})
}
    }
module.exports={
    home_student,show_details,add_student,add_students, edit, edit_student ,delete_student
}
