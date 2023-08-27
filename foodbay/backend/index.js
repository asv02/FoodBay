const mongodb=require('./db');
const express = require('express')
const app = express()
// Port 3000 is set for react in frontend to run, so for backend 5000 is good to go.
const port = 5000

mongodb();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})