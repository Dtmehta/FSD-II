import {useState} from 'react'
function Pb359(){
    const [task , setTask] = useState(" ")
    const [list , setList] = useState([])
    const addtask = () =>{
        setList([...list , task])
        setTask(" ")
    }
    const deletetask = (task) =>{
        setList(list.filter((t) => task != t))
    }
    return(<>
    <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
    <button onClick={addtask}>ADD Task</button>
    { list.map((task) => (<div> <h4> {task} </h4>
        <button onClick={() => deletetask(task)}>Delete </button> </div>)) }
    </>)
}
export default Pb359