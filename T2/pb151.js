// pb 151
const express = require('express')
const app = express()
app.get("/" , (req,res) =>{
    res.sendFile("D://A2_52/pb151.html")
})
app.get('/login' , (req,res) =>{
    res.send(`Welcome ${req.query.uname} and mobile no is ${req.query.mobile}`)
}).listen(3000)
