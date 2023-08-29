const express=require('express');
const app=express();
//front-end is running on 3000 so for backend 5000 is good to go.
const port=5000;

const mongoDB=require('./db');
//It's important to include to avoid cores policy errors.
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
});
app.use(express.json())//important line
//we use routes because as there can be  many endpoints that can be handled in index.js but let say login is handled by index.js but after login let say we provide functionality of storing history then as user entered in our app there must be endpoints which provide history of work done by him so we use routes and middlewares for them. 
app.use('/api/auth',require('./Routes/Auth'));
mongoDB();
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(port,()=>{
    console.log(`Backend is running on ${port}`)
})