let Login=require('../models/login-model.js')


    let registerHome= async(req,res)=>res.render("register",{error:null ,success: null})

    let registerPage =async(req,res)=>{
    let {name,email,password,cpassword,phone}=req.body;
       if(password!==cpassword){
        return res.render('register',{
            error:'passwords match nahi hua',success: null
        });
       }
     const data = new Login({name,email,password,phone});
         await data.save();
    res.render('register',{error:null ,success:'register successfully'})
};


    let loginHome =(req,res)=>{
    res.render('login-page',{error:null});
};


    let loginPage=async(req,res)=>{
    const {email,password}=req.body;
    const user = await Login.findOne({email :email});

       if(!user){
        return res.render('login-page',{ error:'email id not found' });
          }
       if(user.password!==password){
        return res.render('login-page',{error:'password not found' });
         }
      res.render('success',{name:user.name});
        };
  module.exports={registerHome,registerPage,loginHome,loginPage}