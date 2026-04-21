const express = require('express')
var app = express ()

app.get("/" , (req,res) =>{
    // res.write("Hello World ")
    res.send("<h1> Hello World </h1>")
    // res.write("hii")  (does not write after send)
})

app.get("/about" , (req,res) =>{
    res.set("content-type", "text/html")
    res.write("<h1> This is about page </h1>")
    res.send()
})

app.get("/contact" , (req,res) =>{
    res.type('text/html')
    res.write("<h1> This is contact page </h1> ")
    res.send()
})

app.get("/json" , (req,res) =>{
    var a = { name : 'ABC' , branch : 'CE'}
    res.json(a)  // res.send(a) (we can also write)
})

app.get("/file" , (req,res) =>{
    res.sendFile("D://A2_52/1.html")
})

app.listen(3000 , () =>{ console.log("Start")})
