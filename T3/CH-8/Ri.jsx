import {useState , useEffect} from "react";
import axios from 'axios'
const Ri = () =>{
    const [img , setimg] = useState(" ")
    useEffect(() => {setInterval(() => {
        axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {console.log(response.data)
            setimg(response.data)
        })
        .catch((err) => console.log(err))
        }, 3000)} , [])
        return(<>
        <img src={img.message} height={300} width={300} />
        </>)
}
export default Ri