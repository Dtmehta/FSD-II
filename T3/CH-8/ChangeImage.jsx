import {useState} from 'react'
import i1 from './flower.jfif'
import i2 from './fruit.jfif'
function ChangeImage(){
    const [c , setC] = useState(i1)
    const [s , setS] = useState('100px')
    function change(){
        if(c == i1){
            setC(i2)
            setS('300px')

        }
        else{
            setC(i1)
            setS('100px')
        }
    }
    return(<>
    <img onMouseOver={change} onMouseOut={change} src={c} height={s} width={s}></img>
    </>)


}
export default ChangeImage