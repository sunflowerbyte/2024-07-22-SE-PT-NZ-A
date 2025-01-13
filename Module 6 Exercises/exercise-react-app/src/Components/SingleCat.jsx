function SingleCat({name,latinName,image})
{
    return(
<li>
    <h3>{name}</h3> <span>{(latinName)}</span>
    <div>
        <img src={image} 
        style={{ width: '150px', height: '100px', borderRadius: '8px' }}>
    </img></div>
</li>
    )
}

export default SingleCat