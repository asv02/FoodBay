
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express')
const app = express()
const port = 5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())//this line is important to use middlewares.

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// //Now what is use of 'Routes' folder?->We can make endpoints for login,let say a user requests for login page and the user entered the application by authentication using database now he wants to see his History of ordered food,so this will create different requests and require response and it will be very messy to handle these many requests using normal endpoints like in indesx.js.So those requests are handled in index.js using middlewares(app.use()).

app.use('/api/auth', require('./Routes/Auth'));//so now the post->endpoint becomes locahost:5000/api/createuser

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})