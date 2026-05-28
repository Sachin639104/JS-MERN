let express =require('express')
const mongoose = require('mongoose')
let app = express()
let dbconnection =require('./config/dbconnection.js')
let Routes =require('./routes/login-routes.js')


app.set('view engine','ejs')

app.use(express.static("public"));

dbconnection();

app.use(express.urlencoded({extended:true}))

app.use('/',Routes)

app.listen(500,()=>{
    console.log('server is running http://localhost:500');
})