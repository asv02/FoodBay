const express = require('express');
const router = express.Router()

const users = require('../models/users');
const { body,validationResult } = require('express-validator');

router.post("/createuser",

    [body('email','Check Your Email').isEmail, body('password','Check your Password').isLength({ min: 5 })]//this is for validation.

    , async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
          return res.send(`Hello there is Error in Validation`);
        }
      
        try {
            await users.create({
                name: req.body.name,
                password: req.body.password,
                location: req.body.location,
                email: req.body.email
            })
            console.log('User Created.')
            res.json({ success: true })
        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })

module.exports = router;