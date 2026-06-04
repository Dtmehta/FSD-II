import { useReducer } from "react";

const intialvalue = 0
function reducerfunction(state,action){
    if(action.type == 'increment')
        return state+1
    else
        return state-1
    
}
const Pb371 = () =>{ 
    const [state,dispatch] = useReducer(reducerfunction , intialvalue)
    return(<>
    <p>{state}</p>
    <button onClick={() => dispatch({type : 'increment'})}>Increment  </button>
    <button onClick={() => dispatch({type : 'decrement'})}>Decrement </button>
    </>)
}
export default Pb371