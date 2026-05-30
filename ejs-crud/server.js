let express =require('express')

const connectdb = require('./config/dbconnect.js');
const StudentRouter =require('./routes/studentRoute.js')

let app = express()

app.set('view engine','ejs')
app.use(express.static("public"));

connectdb();

app.use(express.urlencoded({extended:true}))

app.use('/',StudentRouter);


app.listen(500,()=>{
    console.log('server is running http://localhost:500');
})