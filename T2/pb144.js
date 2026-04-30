const express = require('express')
const app = express()

app.use(express.urlencoded({extended : true}))
app.get("/" , (req,res) => { res.sendFile("D://A2_52/pb144.html")})
const valid = (req , res , next) =>{
    if(req.body.uname == 'admin')
        next()
    else
        res.send(`<h1 style='color:red'> Invalid Username </h1>`)
}
app.post("/check" , valid , (req , res) =>{
    res.send("Welcome Admin")
}).listen(5000)

