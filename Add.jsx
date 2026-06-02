function Add(props){
    function handleClick(event){
        event.preventDefault()
        alert("your product is added to cart")
    }
    return(<>
    <div>{props.list}</div>
    <button style={props.list} onClick={handleClick}>Add to cart</button>
    </>)
}
export default Add