const express = require('express')
const app = express()
app.get("/" , (req,res) =>{
    res.sendFile("D://A2_52/pb153.html")
})
app.get('/data' , (req,res) =>{
    res.send(`Username = ${req.query.uname}
        password = ${req.query.pass}
        remember = ${req.query.rem}
        subscribe = ${req.query.sub}
        <a href="/"> <button> Logout </button></a>`)
}).listen(3000)