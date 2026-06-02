import '../public/index.css'
function Form()
{
    return(<div>
        <form className="f">
            Username : <input type='text'></input><br></br>
            Password : <input type='password'></input><br></br>
            <button type='submit'>submit</button>
        </form>
    </div> )
}
export default Form