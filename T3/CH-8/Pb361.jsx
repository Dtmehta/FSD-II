import {useState} from 'react'
function Pb361(){
    const [n1 , setN1] = useState(0)
    const [n2 , setN2] = useState(0)
    const [s , setS] = useState(0)

    return(<>
    <input type="number" onChange={(e) => setN1(e.target.value)} />
    <input type="number" onChange={(e) => setN2(e.target.value)} />
    <p> number1 = {n1}</p>
    <p> number2 = {n2}</p>
    <button onClick={() => setS(Number(n1)+Number(n2))}>Addition</button>
    <h1>sum = {s}</h1>
    </>)
}
export default Pb361