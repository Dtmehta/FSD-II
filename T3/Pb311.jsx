import ProductCard from './ProductCard'
import i1 from './image2.jfif'
import i2 from './image3.jfif'
const Pb311 = () =>{
    const product = [{image : i1 , price : "99999" , title :'flower' , rating : 4.8} ,
        {image : i2 , price : "6000" , title :'flower1' , rating : 4.3}
     ]
     return(<>
     <ProductCard list = {product} /> </>)
}
export default Pb311