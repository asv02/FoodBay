const express = require('express');
const router = express.Router()
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');
router.post("/createuser",
    [
        body('email').isEmail(),
        body('name','Check name').isLength({min:3}),//'check name' is message we want to give in case of errors.
        body('password','Check password').isLength({ min: 5 })//validation
    ]
    , async (req, res) => {
   
         const errors=validationResult(req);//store errors
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
         }

        try {
            console.log(req.body);
            await User.create({
                name: req.body.name,
                password: req.body.password,
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

module.exports = router;