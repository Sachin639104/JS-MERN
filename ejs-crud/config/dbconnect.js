let mongoose=require('mongoose')
let connectdb=()=>{
mongoose.connect('mongodb://localhost:27017/studentCRUD')
.then(()=>console.log('databse connected!'))
.catch((err)=>console.log('database error', err))
}
module.exports= connectdb;