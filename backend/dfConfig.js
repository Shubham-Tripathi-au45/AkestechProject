const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
async function initDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL,{dbName:"Akestech"})
        
        console.log("connected to db")
    }
    catch(err){
        console.log("error connectiong to db")
    }
}
module.exports = {initDB}