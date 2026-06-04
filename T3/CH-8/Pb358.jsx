import {useState} from 'react'
function Pb358(){
    const [data , setData] = useState({})
    function changeData(e){
        const {name , value} = e.target
        setData({...data , [name] : value})
    }
    return(<>
    fname = <input type="text" name="fname" onChange={changeData} />
    lname =<input type="text" name="lname" onChange={changeData} />
    <p>First Name = {data.fname}</p>
    <p>Last Name = {data.lname}</p>
    </>)
}
export default Pb358