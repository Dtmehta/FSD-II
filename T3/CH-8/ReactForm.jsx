// create a react app which containg following feild , name , email , password , confirm password , message (textarea) , gender (radio) , city (dropdown)
import {useState} from 'react'
function ReactForm(){
    const [data , setData] = useState({})
    function handlechange(e){
        const {name , value} = e.target
        setData({...data , [name] : value})
    }
    function handlesubmit(e){
        e.preventDefault()
        alert(`your form has been submitted 
            name : ${data.fname} , Email : ${data.email} , city : ${data.city} , Gender : ${data.gender}`)
    }
    return(<>
    <form onSubmit={handlesubmit}>
        Name : <input type="text" name='fname' onChange={handlechange} /><br></br>
        Email : <input type="text" name='email' onChange={handlechange}/><br></br>
        Password : <input type="password" name='pass' onChange={handlechange}/>
        Confirm password : <input type="password" name='cpass' onChange={handlechange}/><br></br>
        Message : <textarea onChange={handlechange}></textarea><br></br>
        Gender :
        Male <input type='radio' name="gender" onChange={handlechange} value="male" />
        Female <input type='radio' name="gender" onChange={handlechange} value="female"/><br></br>
        City <select name='city' onChange={handlechange}><br></br>
            <option disabled>--select city---</option> 
            <option>Ahmedabad</option> 
            <option>Baroda</option> 
            <option>Surat</option> 
        </select>
        <button>Submit</button>
    </form>
    </>)
}
export default ReactForm