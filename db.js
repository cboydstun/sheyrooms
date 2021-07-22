const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://admin:passwordpassword@mern-filter.yg6r5.mongodb.net/booking-v4'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose