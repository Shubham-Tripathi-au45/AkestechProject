const express= require("express")
const { postContact, getContact} = require("../controller/contactus")
const { getService, postService } = require("../controller/service")

const { postSignup, getInfo } = require("../controller/signup")
const userRouter= express.Router()

//
userRouter.post('/signup',postSignup)
userRouter.get('/getinfo',getInfo)

userRouter.post("/postcontact",postContact)
userRouter.get("/getcontact",getContact)

userRouter.post("/postservice",postService)
userRouter.get("/getservice",getService)

//
module.exports=userRouter