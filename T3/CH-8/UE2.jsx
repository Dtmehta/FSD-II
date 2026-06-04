import {useState , useEffect } from "react";
function UE2(){
    const [data , setData] = useState(new Date())
    useEffect(() => { const timer = setInterval(() => {setData(new Date())} , 1000)
    } , [])
    return(<>
    <h1>
        {data.getHours()} : {data.getMinutes()} : {data.getSeconds()}
    </h1>
    </>)
}
export default UE2