import { useEffect } from "react";

function SampleUseEffect()
{
    const [current, setcurrentDate] = useState(new Date())
    useEffect(()=>{
        
        console.log("Use effect runs successfully")

            return()=>{
                //clean up code
            }
        
    }, [currenDate])

function handleButtonClick()
{
    let newDate = new Date()
    setcurrentDate(newDate)
}
    return(
        <>
        <div> Sample Use Effect</div>
        <div> Current date and time is {currentDate.toLocaleDateString}</div>
        <button onClick ={handleButtonClick}>Click</button>
        </>
    )
}

export default SampleUseEffect