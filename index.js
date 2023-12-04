const express = require('express')
const cors = require('cors');
const Router = require('./routes/Routes');

require('dotenv').config();

const app = express()
app.use(cors({
  origin: "*"
}))

app.use(Router)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT)

console.log(`Example app listening on port ${process.env.PORT}!`)
