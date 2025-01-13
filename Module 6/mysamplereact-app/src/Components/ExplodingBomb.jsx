import { useState } from "react"
function ExplodingBomb()
{
    const [exploded,setExploded] = useState(false)
    return(
        <>
        <div>
            <button onClick={()=> setExploded(!exploded)}>Danger: Click to explode</button>
        </div>
        {exploded? <Bomb></Bomb>: null}
        </>
    )
}

function Bomb()
{
    throw new Error('💥 KABOOM 💥')
}
export default ExplodingBomb

