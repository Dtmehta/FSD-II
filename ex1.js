// in home page print json object and in sorted page print age in decending order in formet of string

const express = require('express')
var app = express ()

var person = [ { name : 'ABC' , age : 20} , {name : 'PQR' , age : 25} , {name : 'XYZ' , age : 19}]

app.get("/" , (req,res) =>{
    res.send(person)
})
app.get("/sorted" , (req,res) =>{
    var sort1 = person.sort((a,b) => b.age - a.age)
    for(let i = 0 ; i<sort1.length ; i++){
        res.write("Name : "+sort1[i].name + " , age : "+ sort1[i].age + "\n")
    }
    res.send()
})
app.listen(3000 , () =>{console.log("start")})
