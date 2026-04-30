var express = require('express')
var app = express()
app.set('view engine' , 'ejs')
app.get("/" , (req,res) =>{
    res.render('form')
})
app.get('/submit' , (req,res) =>{
    name = req.query.name
    marks = req.query.marks
    res.render('result' , {name , marks})
}).listen(5000)