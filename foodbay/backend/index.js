const mongodb=require('./db');
const express = require('express')
const app = express()
// Port 3000 is set for react in frontend to run, so for backend 5000 is good to go.
const port = 5000
mongodb();


//Now what is use of 'Routes' folder?->We can make endpoints for login,let say a user requests for login page and the user entered the application by authentication using database now he wants to see his History of ordered food,so this will create different requests and require response and it will be very messy to handle these many requests using normal endpoints like in indesx.js.So those requests are handled in index.js using middlewares(app.use()).

app.use(express.json());//this line is important to use middlewares.
app.use('/api',require('./Routes/createUsers'));//so now the post->endpoint becomes locahost:5000/api/createuser


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})