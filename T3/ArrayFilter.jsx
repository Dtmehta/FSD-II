const ArrayFilter = () =>{
    // const arr = [1,2,3,4,5]
    // const newarr = arr.filter((n) =>{
    //     if(n==1)
    //         return false;
    //     else
    //         return true
    // })
    // return(<>
    // <h1>Before filter {arr}</h1>
    // <h1>After filter {newarr}</h1>
    // </>)

    const student = [{id:1 , name:'A' , std :3} ,
        {id:2 , name:'B' , std :1} ,
        {id:3 , name:'C' , std :5} ,
        {id:4 , name:'D' , std :5} ,
     ]
     const newdata = student.filter((n)=>{
        if(n.std==5)
            return true
        else
            return false;

     })
     return(<>
     <h1>{newdata}</h1></>)
}
export default ArrayFilter