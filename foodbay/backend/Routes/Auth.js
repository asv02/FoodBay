const express = require('express');
const router = express.Router()
const User = require('../models/Users');

router.post("/createuser", async(req, res) => {
    try{
        console.log(req.body);
        await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    }
    catch(error){
       console.log(error);
       res.json({success:false});
    }
})

module.exports=router;