const mongoose=require("mongoose")
const typeSchema =new mongoose.Schema({
    name:{
        type:String
    },
    typeofservice:{
       type:String
    },
})


const typeModel= mongoose.model("typeofservice",typeSchema)
module.exports=typeModel