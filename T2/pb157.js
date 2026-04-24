const express = require('express')
const app = express()

app.use(express.urlencoded({extended : true }))
app.get("/" , (req , res) =>{ res.sendFile("D://A2_52/pb157.html")})
app.get("/login" ,(req,res) =>{
    const {uname , pass , msg} = req.query
    message1 = msg
    res.send(`Username =  ${uname} 
        Password = ${pass}
        message = ${msg}
        <a href='/message'> Show vowel </a>`
    )
} )
const  countVowel = (req,res,next) =>{
    var count = 0;
    for(var char of message1.toLowerCase()){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
            count++
    }
    req.count = count
    next()
}
app.get('/message' , countVowel , (req, res) =>{
    res.send(`no of vowels = ${req.count}`)
}).listen(5001)