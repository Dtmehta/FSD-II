import {useState} from 'react'
function Us2(){
    const [color , setColor] = useState("red")
    const [style , setStyle] = useState("normal")
    const [size , setSize] = useState("20px")
    function changeColor(){
        if(color == 'blue')
            setColor("green")
        else
            setColor("blue")
    }
    return(<>
   
    {/* <button onClick={()=> setC("green")}>Green</button>
    <button onClick={()=> setC("yellow")}>Yellow</button>
    <button onClick={()=> setC("blue")}>Blue</button> */}
    <h1 style={{color:color , fontStyle : style , fontSize : size }}> L J University</h1>
    <button onClick={()=>changeColor()}>Change color</button>
    <button onClick={()=> setStyle("italic")}>Change Style</button>
    <button onClick={()=> setSize("50px")}>Change size</button>
    </>)
}
export default Us2