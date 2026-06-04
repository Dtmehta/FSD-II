import { useReducer } from "react";

const intialvalue = 20
function reducerfunction(state,action){
   return state+action
}
const Pb372 = () =>{
    const [state,dispatch] = useReducer(reducerfunction , intialvalue)
    return(<>
    <button onClick={() => dispatch(5)}>Click Me {state} </button>
    </>)
}
export default Pb372