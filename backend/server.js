const express = require("express")
const cors = require("cors")

const cities = ["barcelona", "madrid", "roma"]


const app = express()
app.use(cors())


app.get("/api/cities", (req,res) =>{
    console.log("HOLA")
    res.json({response: {cities}})
})

app.listen(4000, () => {
    console.log("hola este es el sv")
})