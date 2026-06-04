import {useState} from 'react'
function Us1(){
    const [count , setCount] = useState(0)
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
    return(<>
    <p> you clicked {count} times</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>)
}
export default Us1