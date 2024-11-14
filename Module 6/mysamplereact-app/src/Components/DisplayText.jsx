import { useState } from "react"
function DisplayText()
{
    let x = 10
    let y = 20

    const [first, setFirst]= useState(x)
    const [second,setSecond] = useState(y)

    function handleButtonClick()
    {
        setFirst(first + 1)
        setSecond(second + 1)


    }
    return(
        <>
        <div id="result">
            {first}
        </div>
        <div>
            {second}
        </div>
        <div>
            <button onClick={handleButtonClick}>Click</button>
        </div>
        </>
    )
}

export default DisplayText