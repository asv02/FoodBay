const express=require('express');
const router=express.Router()

const Order=require('../models/Orders');
 
 //copied piece of code.
    router.post('/orderData', async (req, res) => {
        let data = req.body.order_data
        await data.splice(0,0,{Order_date:req.body.order_date})
        console.log("1231242343242354",req.body.email)
    
        //if email not exisitng in db then create: else: InsertMany()
        let eId = await Order.findOne({ 'email': req.body.email })    
        console.log(eId)
        if (eId===null) {
            //means this will be the first order of user
            try {
                console.log(data)
                console.log("1231242343242354",req.body.email)
                await Order.create({
                    email: req.body.email,
                    order_data:[data]
                }).then(() => {
                    res.json({ success: true })
                })
            } catch (error) {
                console.log(error.message)
                res.send("Server Error", error.message)
            }
        }
    
        else {
            //if user already exist i.e,usne pahle bhi order kiya hai aur wahi ab order kr rha.
            try {
                await Order.findOneAndUpdate({email:req.body.email},
                    //this is for to add latest order with your old orders. 
                    { $push:{order_data: data} }).then(() => {
                        res.json({ success: true })
                    })
            } catch (error) {
                console.log(error.message)
                res.send("Server Error", error.message)
            }
        }
    })

    router.post('/myOrderData', async (req, res) => {
        try {
            console.log(req.body.email)
            let eId = await Order.findOne({ 'email': req.body.email })
            //console.log(eId)
            res.json({orderData:eId})
        } catch (error) {
            res.send("Error",error.message)
        }
        
    
    });

module.exports=router;