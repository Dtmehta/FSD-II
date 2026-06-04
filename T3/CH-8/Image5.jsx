import {useState} from 'react'
import i1 from './flower.jfif'
import i2 from './flower1.jfif'
import i3 from './flower2.jfif'
import i4 from './flower3.jfif'
import i5 from './flower4.jfif'
function Image5(){
    const arr = [i1,i2,i3,i4,i5]
    const [image , setImage] = useState(arr[0])
    function changeImage(){
        const i = Math.floor(Math.random() * arr.length)
        setImage(arr[i])
    }
    return(<>
    <img onClick={changeImage} src={image} height={'200px'} width={'200px'}></img>
    </>)
}
export default Image5