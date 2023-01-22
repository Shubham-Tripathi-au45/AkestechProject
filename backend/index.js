const express=require("express")
const app=express()
require("dotenv").config()
const userRouter= require("./routes/signUp")
// const cookieParser  = require("cookie-parser")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
const {initDB}=require("./dfConfig")
const cors= require("cors")
app.use(cors())
initDB()
app.use("/",userRouter)
app.listen(8000,()=>{
    console.log("Server starting at Port 8000")
})
console.log(__dirname)

