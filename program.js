const express = require('express')
const app = express()
var path = require('path')
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,"../html"), {index: 'program.html'}))
app.post('/calc' , (req,res) => 
{
    var no1 = parseInt(req.body.n1)
    var no2 = parseInt(req.body.n2)
    if((no1>0) && (no2>0)){
        if(req.body.formula == 'add'){
            sum = no1+no2
            res.write("addition = "+sum)
        }
        else if(req.body.formula == 'sub'){
            sb = no1-no2
            res.write("Substraction = "+sub)
        }
        else if(req.body.formula == 'mul'){     
             mul = no1*no2
            res.write("Multiplication = "+mul)
        }
        else if(req.body.formula == 'div'){
             div = no1/no2
            res.write("division = "+div)
        }
        else{
            res.write("You have not selected any formula")
        }
    }
    else{
        res.write("please enter a valid number")
    }
    res.send()
}).listen(5000)
