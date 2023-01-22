
const signupModel=require("../models/signupModel")

//Post Signup

const postSignup= async (req,res)=>{
    const data=req.body
    console.log(req.body)
    try{
        const detail= await signupModel.create(data)
        
        res.status(201).send({status:"Successfully Signuped"})
    }
    catch(err){
        res.status(500).send({status:"Cannot execute form"})
    }
}

//Get Information

const getInfo= async (req,res)=>{
    try{
        const details= await signupModel.find()
        res.status(201,{status:"Successfully fetched info"}).send(details)
    }
    catch(err){
        res.status(501).send({status:"Cannot fetch"})
    }
}


module.exports={
    postSignup,getInfo
}