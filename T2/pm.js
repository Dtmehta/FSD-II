// post method
const express = require('express')
const app = express()

app.use(express.urlencoded({extended : true}))
app.get("/" , (req,res) =>{ res.sendFile('D://A2_52/pm.html')})
app.post('/login' ,(req,res) =>{
    res.send(`Welcome ${req.body.uname}`)
}).listen(5001)