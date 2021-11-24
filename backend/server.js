const express = require("express")

const cities = ["barcelona", "madrid", "roma"]


const app = express()

app.get("/api/cities", (req,res) =>{
    res.json({response: {cities}})
})

app.listen(4000, () => {
    console.log("hola este es el sv")
})