const express = require('express')
const dotenv = require('dotenv');
const path = require("path");
dotenv.config({ path: path.join(__dirname, '.env') });
const app = express()


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 123')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })