import Ex from './Example2.jsx'
function Example(){
    const s = {backgroundColor : "green" ,
        fontSize : "50px" , 
        fontStyle : "italic" , 
        textTransform : "uppercase"
    }
    return(<>
    <Ex value = {s} />
    </>)
}
export default Example