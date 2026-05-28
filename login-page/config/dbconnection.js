let mongoose=require('mongoose')

let dbconnection=()=>{
mongoose.connect('mongodb://localhost:27017/studentLOGIN')
.then(()=>console.log('databse connected!'))
.catch((err)=>console.log('database error', err))

}

module.exports=dbconnection;