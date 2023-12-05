const mongoose = require('mongoose')
const connect = mongoose.connect("mongodb://localhost:27017/login")

//check connection
connect.then(()=>{
    console.log("database connected")
})
.catch(()=>{
    console.log("database not connected")
})

//create a schema
const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

//collection part
const collection = new mongoose.model("users",LoginSchema);
module.exports = collection;