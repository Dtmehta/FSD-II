const express = require('express')
const app = express()
app.get("/" , (req,res) =>{
    res.sendFile("D://A2_52/form.html")
})
app.get('/login' , (req,res) =>{
    res.send(`Welcome ${req.query.uname}`)
}).listen(5000)

