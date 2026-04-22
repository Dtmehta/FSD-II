const express = require('express')
const app = express()
app.get("/" , (req,res) =>{
    res.sendFile("D://A2_52/pb152.html")
})
app.get('/data' , (req,res) =>{
    var message = req.query.msg
    let msg1 = message.split(".")
    for(var i of msg1){
        res.write(i + "\n")
    }
    res.send()
}).listen(3000)
