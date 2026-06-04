import {useState} from 'react'
function Showhide(){
    const [c , setC] = useState("L J university")
    const [c1 , setC1] = useState("hide")
    function change(){
        if(c == "L J university"){
            setC("")
            setC1('show')
        }
        else{
            setC("L J university")
            setC1('hide')
        }
    }
    return(<>
    <p>{c}</p>
    <button onClick={change}>{c1}</button>
    </>)


}
export default Showhide