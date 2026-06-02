function Event1()
{
    // const mystyle = {color : "white" , backgroundColor : "blue" , padding : "10px 20px" , margin : "200px"}
    // function handleClick(){
    //     alert('Welcome to LJU')
    // }
    // return(<>
    // <button style={mystyle} onClick = {handleClick}>Click Me</button>
    // </>)
    function handleSubmit(event){
        event.preventDefault() 
        alert("You clickend submit")
    }
    return(<>
    <form onSubmit={handleSubmit}>
    <input type='submit' />
    </form> </>)
}
export default Event1