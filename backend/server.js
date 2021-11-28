const express = require("express");
const cors = require("cors");
const Router = require('./routes/routes');
require('dotenv').config();
require('./config/database');

const app = express()

app.use(cors())
app.use(express.json());

app.use('/api', Router)


app.listen(4000, () => {
    console.log("hola este es el sv")
})




