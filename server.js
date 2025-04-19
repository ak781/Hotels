import express from 'express'
import db from './db.js'
require('dotenv').config()
const app = express();

import bodyParser from'body-parser'
app.use(bodyParser.json());
const PORT=process.env.PORT || 3000;



//get method to get the persons

import personRoutes from './routes/personRoutes.js'
app.use('/person',personRoutes);


//menu get and post

import menuRoutes from './routes/menuRoutes.js'
app.use('/menu',menuRoutes);





app.listen(PORT,()=>
{
    console.log("server is listening at port 3000")
});//starts server at 3000 port