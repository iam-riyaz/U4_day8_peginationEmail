 
 const mongoose=require("mongoose");
 
 const usersSchema=new mongoose.Schema({
     first_name:{type:String,required:true},
     last_name:{type:String,required:true},
     email:{type:String,required:true}
 })

 const Users= mongoose.model("users",usersSchema)

 module.exports=Users