import i1 from './assets/flower1.jfif'
import i2 from './assets/image2.jfif'
import i3 from './assets/image3.jfif'
import i4 from './assets/image4.jfif'
import i5 from './assets/image5.jfif'
const Image = () =>{
    const ver = [i1,i2,i3,i4,i5]
    return (<>
    <h1>using arraymap function</h1>
    {
        ver.map((v)=>{
            return <img src={v} height={200} width={200}></img>
        })
    }</>)
}
export default Image