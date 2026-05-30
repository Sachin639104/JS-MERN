

let Student =require('../models/studentModel.js')

    let home_student= async(req,res)=>{
    let msg=req.query.msg;
    let studentDetails= await Student.find();
    res.render('home',{studentDetails,msg})
}


    let show_details = async(req,res)=>{
    let id=req.params.id
    //let stu=await Student.findOne({_id:id})
    let stu= await Student.findById(id)
    res.render('show-details',{stu})
}

    let add_student = (req,res)=>res.render('add-student')


    let add_students = async(req,res)=>{
    let {name,email,phone,course}=req.body;
    let stu = await Student.create({name,email,phone,course})
    if(stu)
    res.redirect('/?msg=record has been saved!!')
}


    
    let edit= async(req,res)=>{
    let id=req.params.id
    let stu= await Student.findById(id)
    res.render('edit-student',{stu})
}



    let edit_student= async(req,res)=>{
    let id=req.params.id
    let stu= await Student.findByIdAndUpdate(id,req.body)
    if(stu)
        res.redirect('/?msg=record has been updated!!')
}


    let delete_student= async(req,res)=>{
    let id=req.params.id
    let stu= await Student.findByIdAndDelete(id,req.body)
    if(stu)
        res.redirect('/?msg=record has been delete!!')
}
module.exports={
    home_student,show_details,add_student,add_students, edit, edit_student ,delete_student
}