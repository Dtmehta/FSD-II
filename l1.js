// collection = table , document = row , field = column

// To create collection
// db.createCollection("student")

// TO insert document
// db.collectionName.insertOne({key : "value"})
// ex. db.student1.insertOne({name : "xyz" , branch : "ce"})

// To show data
// db.student1.find()

// insert many
// db.student1.insertMany([{name : "ABC"} , {branch : "CE" , rollno : 101},{name : "PQR" , branch : "AIDS" , rollno : 201}])

// RENAME
// db.student1.renameCollection("students")

// TO DROP
// db.students.drop()

// Q-1
// create one collection of name employees insert 5 documents which has field (id,name,age,position,salary) ,
//  show all documents , rename collection to emp 

// find() --> syntex - db.collectionname.find(condition , projection)
    // show only name --> db.emp.find({} , {name : 1})
    // show salary=30000 --> db.emp.find({ salary: 30000 }, { name: 1, salary: 1 , _id : 0 })

    // findOne() --> show only one or first document --> ex. db.emp.findOne()
    // limit() --> limit the number of documents to show --> ex. db.emp.find({age : 30}).limit(2)
    // skip() --> skip the document to show --> ex. db.emp.find({age : 30}).limit(2).skip(1)

// UPDATE the document
    // updateOne() --> ex. db.emp.updateOne({name : 'ABC'} , {$set : {salary : 25000}})
        // if name not exists and update -->  db.emp.updateOne({name : 'abc'} , {$set : {salary : 25000}}, {upsert : true})
    // updateMany() --> ex. db.emp.updateMany({age : 30} , {$set : {salary : 40000}})

// DELETE the document
    // deleteOne() --> ex. db.emp.deleteOne({name : "MNO"})
    // deleteMany() --> ex. db.emp.deleteMany({age : 30})
    // db.emp.deleteMany({}) - to delete all data

// count() - db.emp.count({salary : 40000}) - It will give deprecated error but we can use
            // we can also use - db.emp.find({salary : 40000}).count()
       
// sort () - db.emp.find().sort({age : -1})  --> 1 for ascending , -1 for descending

// Q-2
// create a collection name student having fields name,age,std,percentage insert 5 random document in the collection
// 1. find name of all the students having age=10
// 2. arrange all the records in descending order of age 
// 3. update the std for all the students to 12
// 4. show the name of student who is oldest among all the student
// 5. delete the record of student if percentage is 60

//Q-3 
// people collection - 10 random data (name,age,branch)

// ** COMPARISION OPERATORS **

// db.people.find({age:{$eq:20}})        --> equal
// db.people.find({age:{$ne:20}})        --> not equal
// db.people.find({age:{$gt:30}})        --> greater than
// db.people.find({age:{$lt:23}})        --> less than
// db.people.find({age:{$lte:21}})       --> less and equal 
// db.people.find({age:{$gte:20}})       --> greater and equal
// db.people.find({age:{$in:[20,25]}})   --> in only data 20 and 25
// db.people.find({age:{$gt:25,$lt:50}}) --> gt 25 and lt 50 ni middle values
// db.people.find({age:{$nin:[20,25]}})  --> not 20 and 25 

// ** LOGICAL OPERATORS **

// db.people.find({$and : [{name : "abc"} , {age : {$gt : 20}}]}) --> AND
// db.people.find({$or : [{name : 'pqr'} , {age : 28}]})          --> OR
// db.people.find({age : {$not : {$lt : 25}}})                    --> NOT
// db.people.find({$nor : [{name : 'abc'} , {age:25}]})           --> NOR

// field update operators
// db.people.updateMany({} , {$inc : {age : 5}})                 --> INC or (for dec age : -5)
// db.people.updateMany({} , {$mul : {age : 2}})                 --> MUl or (for div age : 0.5)
// db.people.updateMany({} , {$rename : {"branch" : "Branch"}})  --> to change field name
// db.people.updateMany({} , {$set : {city : 'ahd'}})            --> to add all field name city with ahd value
// db.people.updateMany({age : 21} , {$unset : {Branch : " "}})  --> for age 21 delete branch field

//  ** SQL to mongoDB mapping **
// 1. create table --> db.createCollections("name")
// 2. alter table lju add join_table DATETIME --> db.lju.updateMany({} , {$set : {join_date : new Date()}})
// 3. alter table lju drop column join_table -->  db.lju.updateMany({} , {$unset : {join_date : " "}})

// AGGREGATION

// filter data --> {$match : {condition }}  
        // --> db.people.aggregate([{$match : {city : "ahd"}}])
// Group data --> $group  
        // --> db.people.aggregate([{ $group : {_id : "$city" , totalpeople : {$sum :1}}}]) or
        // --> db.people.aggregate([{ $group : {_id : "$city" , avgmarks : {$avg : "$marks"}}}])
    // {$group : {_id : "$field" , result : {operation}}}
    // calculate total , min, max -->$sum  ,$min , $max , $avg
// sort --> {$sort : {field : 1 or -1}}
        // --> db.people.aggregate([{$sort : {marks : -1}}])
// project --> {$project : {field : 1 , _id:0}}
        // --> db.people.aggregate([{$project : {studentname : "$name" , score : "$marks" , _id:0}}])
