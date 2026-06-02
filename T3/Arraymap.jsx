const Arraymap = () =>{
    // const arr = [1,2,3,4,5]
    const ver = ['a','b','c','d']
    return (<>
    <h1>using arraymap function</h1>
    {
        ver.map((v)=>{
            return <h1> value = {v.toUpperCase()} </h1>
        })
    }</>)
}
export default Arraymap