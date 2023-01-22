const mongoose= require("mongoose")
const signupSchema= new mongoose.Schema({
    firstName:{
        type:String

    },
    lastName:{
        type:String
    },
    address:{
        type:String
    },
    contact:{
        type:String
    },


})
const signupModel= mongoose.model("registration",signupSchema)
module.exports=signupModel