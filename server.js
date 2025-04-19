const express= require('express')

require('dotenv').config();


const app = express();

const bodyParser =require('body-parser')
app.use(bodyParser.json());
const PORT=process.env.PORT || 3000;



//get method to get the persons

const personRoutes =require('./routes/personRoutes.js')
app.use('/person',personRoutes);


//menu get and post
const menuRoutes =require( './routes/menuRoutes.js')
app.use('/menu',menuRoutes);





app.listen(PORT,()=>
{
    console.log("server is listening at port 3000")
});//starts server at 3000 port