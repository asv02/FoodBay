const express = require('express');
const router = express.Router()
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');

const jwt=require('jsonwebtoken');//we send token with our request when we hit a endpoint to tell server that we are safe user.

const bcrypt=require('bcryptjs');//hashing algorithm used to hash passwords,etc.

const jwtSecret="AkashSuryavanshi";//secret key used for sign.

router.post("/createuser",
    [
        body('email', 'Check your email').isEmail(),
        body('name', 'Check name').isLength({ min: 3 }),//'check name' is message we want to give in case of errors.
        body('password', 'Check password').isLength({ min: 5 })//validation
    ]
    , async (req, res) => {

        const errors = validationResult(req);//store errors
        if (!errors.isEmpty()) {
            console.log('errors during validation')
            return res.status(400).json({ errors: errors.array() });
        }

        const salt=await bcrypt.genSalt(10);//this is salt(some extra bits.)
        let secpassword=await bcrypt.hash(req.body.password,salt)//create hash of password using salt.
        try {
            console.log(req.body);
            await User.create({
                name: req.body.name,
                password: secpassword,//hashed password.
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

router.post("/loginuser",

    [
        body('email', 'Check your email').isEmail(),
        //'check 'email' is message we want to give in case of errors.
        body('password', 'Check password').isLength({ min: 5 })//validation
    ], async (req, res) => {

        const errors = validationResult(req);//store errors
        if (!errors.isEmpty()) {
            console.log('errors during validation')
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try {
            console.log(req.body);
            let userdata = await User.findOne({ email })
            if (!userdata) {
                return res.status(400).json({ error: "Try login with correct email" })
            }
            const pwdcompare=await bcrypt.compare(req.body.password,userdata.password);
            if (!pwdcompare) {
                return res.status(400).json({ error: "Try login with correct password" })
            }

            const data={
                user:{
                    id:userdata.id
                }
            }
            //jwt has three parts->header,payload,secretkey so here authToken->header same,payload->data and secretkey->jwtSecret.
            const authToken=jwt.sign(data,jwtSecret)

            return res.json({ success: true ,authToken:authToken})
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })
    
    //copied piece of code.
    // router.post('/orderData', async (req, res) => {
    //     let data = req.body.order_data
    //     await data.splice(0,0,{Order_date:req.body.order_date})
    //     console.log("1231242343242354",req.body.email)
    
    //     //if email not exisitng in db then create: else: InsertMany()
    //     let eId = await Order.findOne({ 'email': req.body.email })    
    //     console.log(eId)
    //     if (eId===null) {
    //         try {
    //             console.log(data)
    //             console.log("1231242343242354",req.body.email)
    //             await Order.create({
    //                 email: req.body.email,
    //                 order_data:[data]
    //             }).then(() => {
    //                 res.json({ success: true })
    //             })
    //         } catch (error) {
    //             console.log(error.message)
    //             res.send("Server Error", error.message)
    
    //         }
    //     }
    
    //     else {
    //         try {
    //             await Order.findOneAndUpdate({email:req.body.email},
    //                 { $push:{order_data: data} }).then(() => {
    //                     res.json({ success: true })
    //                 })
    //         } catch (error) {
    //             console.log(error.message)
    //             res.send("Server Error", error.message)
    //         }
    //     }
    // })

module.exports = router;