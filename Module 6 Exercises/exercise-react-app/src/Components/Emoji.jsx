import { useState } from "react"

function Emoji ()

{
    const [emoji,setEmoji] = useState("😊");

    const toggleEmoji = () => {
        setEmoji((prevEmoji) => (prevEmoji === "😊" ? "😔" : "😊"));
      };
    



    return(
        <>
        <div>{emoji}</div>
            
            <button onClick={toggleEmoji}>
            Change Mood   
            </button>
        </>
    )
}

export default Emoji