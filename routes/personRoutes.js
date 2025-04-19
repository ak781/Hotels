const express = require('express')
//import Person from './../models/Person.js'
const Person = require('./../models/Person')
const router = express.Router();

router.post('/',async (req,res)=>{

    // const data = req.body //Assuming the request body contains the person data

    // //Create a new Person documnet using the Mongoose Model

    // const newPerson= new Person(data);
    // //write as this and keep person argument blank or give argument data
    // // newPerson.name=data.name;
    // // newPerson.age=data.age;
    // // newPerson.mobile=data.mobile;
    // // newPerson.email=data.email;
    // // newPerson.address=data.address;

    // newPerson.save((error,savedPerson)=>{
    //     if(error){
    //         console.log('Error saving person',error);
    //         res.status(500).json({error: 'Internal server error'})
    //     }
    //     else{
    //         console.log("data saved successfully");
    //         res.status(200).json(savedPerson);
    //     };
    // })
    try{
        const data = req.body //Assuming the request body contains the person data

        //Create a new Person documnet using the Mongoose Model

        const newPerson= new Person(data);
    // //write as this and keep person argument blank or give argument data
    // // newPerson.name=data.name;
    // // newPerson.age=data.age;
    // // newPerson.mobile=data.mobile;
    // // newPerson.email=data.email;
    // // newPerson.address=data.address;

        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data= await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})


router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType =='chef'|| workType=='waiter'|| workType=='manager')
        {
            const response= await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid work type'});
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

//update the person database 

router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id ; //extracting id from parameter
        const updatedPerson = req.body;

        const response= await Person.findByIdAndUpdate(personId,updatedPerson,{
            new:true, //returns the updated documnent
            runValidators:true,//run mongoose validators
        })

        if(!response)
        {
            return res.status(404).json({error:'Person not found'});
        }
        
        console.log('Data Updated');
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        
        const response= await Person.findByIdAndDelete(personId);

        if(!response)
        {
            return res.status(404).json({error:'Person not found'});
        }
        console.log('Record Deleted Successfully');
        res.status(200).json({response:'Deletion Successfull'});
        
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
})

module.exports=router