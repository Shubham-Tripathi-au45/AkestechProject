const contactUs= require("../models/service")
const serviceModel= require('../models/typeofservice')





//Post Service

const postService = async (req,res)=>{
    const {name,typeofservice}=req.body
    const document= await contactUs.findOne({name})
   
    
    try{
        const details= await serviceModel.create({typeofservice})
        const doc= await contactUs.findByIdAndUpdate(document._id,{$push:{service:details._id}})
        
            res.status(201).send({status:"Succesful",doc})
    }
    catch(err){
        res.status(501).send({status:"Unsuccessful"})
      
    }
}

//Get service

const getService = async (req,res)=>{
    try{
        const details= await serviceModel.find()
        res.status(201).send({status:"Successful",details})
    }
    catch(err){
        res.status(501).send({status:"cannot get"})
    }
}
module.exports={
    postService,getService
}