// Multer 
var express = require('express')
var app = express()
var multer = require('multer')
app.use(express.static(__dirname , {index:'m1.html'}))
var storage = multer.diskStorage({destination:'myfolder' , 
    filename :(req,file,cb)=>{
        cb(null,file.originalname);
    }})
var upload = multer(
    {storage : storage}).single('mypic')
app.post('/uploadfile' , upload , (req,res) =>{
    const f = req.file
    if(f)
        res.send(`${f.originalname} has been uploaded`)
}).listen(5000)