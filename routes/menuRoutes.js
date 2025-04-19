const express = require('express')


const MenuItem = require('./../models/Menu.js');
const router = express.Router()

router.post('/',async(req,res)=>{
    try{
        const menuData= req.body;

        const newMenu= new MenuItem(menuData);

        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/',async(req,res)=>{
    try{
        const newdata= await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(newdata);

    }
    
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

module.exports=router