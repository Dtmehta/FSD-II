const express = require('express')
const app = express()

// const addName , addCollege , addMarks is called middleWare
const addName = (req,res,next) => { req.name = "XYZ"
    next()
}
const addCollege = (req,res,next) =>{ req.college = 'LJU'
    next()
}
const addMarks = (req,res,next) =>{ req.total = 50 + 40
    next()
}
app.get('/student' , addName , addCollege , addMarks , (req , res ) =>{
    res.send("Student Name= " + req.name + " College Name= " + req.college + " Total Marks= "+ req.total)
}).listen(5001)

// example
// college classroom entry system
// 1. print 'student entered in class'
// 2. id Valid
// 3 . valid => welcome , invalid => Access Denied
const entryLog = (req , res , next) =>{ console.log("Student entered in class")
    next()
}
const checkID = (req , res , next) =>{ const ID = '123'
    if(ID == req.params.id){
        req.id = req.params.id
        console.log("ID varified")
        next()
    }
    else{
        res.send("Access Denied")
    }
}
app.get("/class/:id" , entryLog , checkID , (req , res) =>{
    res.send(`Welcome ${req.id} to class`)
}).listen(3000)
