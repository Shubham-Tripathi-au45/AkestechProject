const contactUs= require("../models/service")
const serviceModel= require('../models/typeofservice')



//Post contact

const postContact= async (req,res)=>{
    const data= req.body
    try{
        const fetch= await contactUs.create(data)
        
        res.status(201).send({status:"Successfully submitted"})
    }
    catch(err){
        res.status(501).send({status:"Cannot sumbit form"})
    }
    // console.log(err)
}

//Get Contact
const getContact = async (req,res)=>{
    
    try{
        const data= await contactUs.find().populate("service")
        res.status(201,"Suceesfully").send(data)
    }
    catch(err){
        res.status(501).send({status:"cannot fetch data"})
    }
}




module.exports={
    postContact,getContact
}