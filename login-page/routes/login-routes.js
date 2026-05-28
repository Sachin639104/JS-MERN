let router = require('express').Router();

let{registerHome,registerPage,loginHome,loginPage}=require('../controller/login-controller.js')



router.get('/',registerHome)


router.get('/login-page',loginHome)

router.post('/register',registerPage)



router.post('/login-page/',loginPage)

module.exports=router;