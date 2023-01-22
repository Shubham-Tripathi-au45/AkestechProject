const mongoose=require("mongoose")
const contactSchema= new mongoose.Schema({
    name:{
        type:String,
    },
service:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"typeofservice"
}],
})

//Schema for typesofSerivce

 
        
            
        


    
   


const contactModel= mongoose.model("contact",contactSchema)

module.exports=contactModel