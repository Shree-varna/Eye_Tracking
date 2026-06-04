const mongoose=require("mongoose")

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('mongoose connected');
})
.catch((err)=>{
    console.log(err);
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection1',logInSchema)

module.exports=LogInCollection
