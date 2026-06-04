import { createContext } from "react";
import Comp from './Comp'
const Fname = createContext()
function Uc(){
    return(<>
    <Fname.Provider value="ABC">
        <Comp/>
        </Fname.Provider>
    </>)
}
export default Uc
export {Fname}