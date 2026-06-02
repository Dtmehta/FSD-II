function ProductCard(props) {
    return(<>
    {
        props.list.map((p) =>{
         return <div>
            <img src = {p.image} height={300} width={300}></img>
            <h2>{p.title}</h2>
            <h3>{p.rating}</h3>
            <h4>{p.price}</h4>
         </div>   
        })
    }
    </>)
}

export default ProductCard