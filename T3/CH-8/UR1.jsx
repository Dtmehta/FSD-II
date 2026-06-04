import { useReducer } from "react";

const intialvalue = 0
function reducerfunction(state,action){
    if(action.type == 'increment')
        return state+1
}
const UR1 = () =>{
    const [state,dispatch] = useReducer(reducerfunction , intialvalue)
    return(<>
    <button onClick={() => dispatch({type : 'increment'})}>Click Me {state} </button>
    </>)
}
export default UR1