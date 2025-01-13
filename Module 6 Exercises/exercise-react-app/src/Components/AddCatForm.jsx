import { useState } from "react"
function AddCatForm ({onAddCat})
{
    const [name,setName]=useState('')
    const [latinName,setLatinName]=useState('')
    const [image,setImage]=useState(null)

    function handleSubmit(e)
    {
        e.preventDefault()

        onAddCat({name,latinName,image})

    }

    function handleImageChange(e) {
        const file = e.target.files[0]; // Get the first file from the input
        setImage(file); // Update the state with the selected file
      }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Cat Name: <input type="text" value={name} name="catName" onChange={(e)=>setName(e.target.value)}></input>
            </label>
            <label>
                Latin Name: 
                <input type="text" value={latinName} name="latinName" onChange={(e)=>setLatinName(e.target.value)}></input>
            </label>
            <label>
                Upload image: 
                <input type="file" accept="image/*" name="image" onChange={handleImageChange}></input>
            </label>
            <input type="submit"></input>
        </form>
    )
}

export default AddCatForm