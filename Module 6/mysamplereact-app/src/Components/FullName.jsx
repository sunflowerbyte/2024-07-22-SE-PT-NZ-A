import NamePart from "./NamePart"

function FullName(props)
{
    return(
        <>
        Full Name:<NamePart value={props.firstName}></NamePart> <NamePart value={props.lastName}></NamePart>
        </>
    )
}

export default FullName