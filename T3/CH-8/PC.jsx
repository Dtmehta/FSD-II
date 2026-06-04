import { createContext } from "react";
import C1 from './C1'
const Fname = createContext()
const Lname = createContext()
function PC(){
    return(<>
    <Fname.Provider value="ABC">
        <Lname.Provider value="XYZ">
            <C1/>
        </Lname.Provider>
    </Fname.Provider>
    </>)
}
export default PC
export {Fname , Lname}