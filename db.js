//this file will be used to link mongoDB and nodeJS
const mongoose = require('mongoose');
// now define the mongoDB connection url

//const mongoURL= 'mongodb://localhost:27017/hotels'//if hotels name db exist it will switch to it otherwise it will create one
const mongoURL ='mongodb+srv://ak7813228:mongodb12345@cluster0.mlpljdb.mongodb.net/hotels'

//set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//get the default connection
//Mongoose maintains a default conncetion objext representing the MongoDB conncetion
const db= mongoose.connection;

//Define event listener
db.on('connected',()=>{
    console.log("Connected to MongoDB server");
});

db.on('error',(err)=>{
    console.log("MongoDB connection error: ",err);
});

db.on('disconnected',()=>{
    console.log("MongoDB dissconnected");
});

//Export the database connection

module.exports={
    db
};