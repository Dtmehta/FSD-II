const expr = require('express')
const router =  expr.Router()
const data = [{ id:101 , name:"ABC" , branch:"CE"} ,
                { id:102 , name:"PQR" , branch:"AIDS"} ,
                { id:103 , name:"MNC" , branch:"CE"} ,
                { id:104 , name:"ABC" , branch:"CE"} ,
                { id:105 , name:"XYZ" , branch:"AIDS"}]
router.get('/' , (req,res) =>{ res.send(data)})
router.get('/:id' , (req,res) =>{ 
    var c = data.filter((i1) => i1.id == req.params.id)
    if(c.length > 0)
        res.send(c)
    res.send('data not found')
})
router.get('/branch/:branch' , (req,res) =>{
    var b = data.filter((i2) => i2.branch == req.params.branch)
    if(b.length > 0) 
        res.send(b)
    else
        res.send('data not found')
})
module.exports = router
