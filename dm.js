// Dynamic Routing

const express = require('express')
var app = express ()

app.get("/day/:day/month/:month" , (req,res) =>{
    res.send(`Today is ${req.params.day} of ${req.params.month} month`)
}).listen(3000)

app.get("/user/:id" , (req,res) =>{
    res.send(`user id ${req.params.id}`)
}).listen(3001)

app.get("/user" , (req,res) =>{
    res.send(`Welcome ${req.query.name} of ${req.query.branch}`)
}).listen(5000)