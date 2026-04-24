const express = require('express')
const app = express()
var cp = require('cookie-parser')
app.use(cp())

app.use(express.static(__dirname , {index:'pb200.html'}))
app.get('/sub-feedback' , (req,res) =>{
    const{name,mail,pass,r} = req.query
    const f1 = {name:name , mail:mail , pass:pass , r:r}
    res.cookie('feedback' , f1 , {maxAge:10000})
    res.send("data submitted <a href='view-feedback'> Link </a>")
})
app.get('/view-feedback' , (req,res) =>{
    data = req.cookies.feedback
    if(data)
        res.send(`feedback = ${data}`)
    else{
        res.send('No feedback avalible')
    }
}).listen(5000)