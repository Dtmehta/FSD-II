import {useState, useEffect } from "react";
function UE1(){
    const [count , setCount] = useState(0)
    useEffect(() => {alert('Clicked')})
    const changecount = () =>{setCount(count+1)}
    return(<>
    <button onClick={changecount}>Button A</button>
    <h1>{count}</h1>
    </>)
}
export default UE1