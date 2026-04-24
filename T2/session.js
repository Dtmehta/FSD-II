const express = require('express')
const app = express()
const sess = require('express-session')
app.use(sess({ secret : 'Hello' , 
    resave : true , saveUninitialized:true
}))
app.get('/' , (req,res) =>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`you visited this page ${req.session.page_views} times`)
    }
    else{
        req.session.page_views = 1;
        res.send('welcome for this page for first time')
    }
}).listen(5000)