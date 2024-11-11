import '../App.css'
function HelloMessage({name, institute, country = "NZ", children})
{


    return(
        <>
        <h1 style={{color:"pink", background:"purple"}}>Welcome {name} and you are part of {institute} in {country}</h1>
        {children}
        </>
    )
}

        {/*above is in-line CSS; below is external CSS imported from App.CSS
            
            <h1 className = 'h1class'>Welcome {props.name} and you are part of {props.institute} </h1>*/}

export default HelloMessage