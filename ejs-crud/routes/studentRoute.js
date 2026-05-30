let routes = require('express').Router();

let { home_student,show_details,add_student,add_students, edit, edit_student ,delete_student}
 =require('../controller/studentController.js');


routes.get('/',home_student);

routes.get('/show-details/:id',show_details);

routes.get('/add-student/',add_student);

routes.get('/edit-student/:id',edit);

//app.get('/delete-student/:id', delete_student);


routes.post('/add-student/',add_students);

routes.post('/edit-student/:id',edit_student);

module.exports=routes;