var express = require('express')
var app = express()
app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended : true}))
app.get("/" , (req,res) =>{
    res.render('pb241')
})
app.post('/submit' , (req,res) =>{
    name = req.body.name
    email = req.body.email
    res.render('result_1' , {name , email})
}).listen(5000)

// cookie,session,multer,nodemailer,ejs most Imp topics 
// restful API , routing ()