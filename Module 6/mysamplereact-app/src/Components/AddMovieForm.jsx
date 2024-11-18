import { useState } from "react"
function AddMovieForm({onAddMovie})
{

    const [title,setTitle] = useState('')
    const [year,setYear] = useState('')

    function handleSubmit(e)
    {
        e.preventDefault()

       onAddMovie({title,year})
    }

    return(
        <>
        <form onSubmit={handleSubmit}> 
            <label>
                Movie Title: 
                <input type="text" value={title} name="title" onChange={(e)=>setTitle(e.target.value)}></input>
            </label>
            <label>
                Year Released:
                <input type="number" value={year} onChange={(e)=>setYear(e.target.value)} name="year"></input>
            </label>
            <input type="submit"></input>
        </form>
        </>
    )
}

export default AddMovieForm