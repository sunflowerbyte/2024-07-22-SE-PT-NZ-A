import Movie from "./Movie"
import { useState } from "react"

function MovieLists()
{
    const movies = [
        {
            id:1,
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        }, 
        {
        id:2,
        title: "The Dark Knight",
        year: 2008,
        synopsis: "Batman fights the menace known as the Joker.",
    }, 
        {
        id:3,
        title: "Interstellar",
        year: 2014,
        synopsis: "Explorers travel through a wormhole in space.",
    },
    {
        id:4,
        title:"Despicable Me",
        year:2024,
        synopsis:"Cartoons"
    }

     ]

const [currentMovies, setCurrentMovies] = useState(movies)

    
const movieItems = currentMovies.map(movie=> <Movie key={movie.id} title={movie.title} year={movie.year} synopsis={movie.synopsis}></Movie>)

function handleReverseMovies()
{
let clonedMovies = [...currentMovies]
clonedMovies.reverse()
setCurrentMovies(clonedMovies)
}

    return(
<div>
    <ul>
        {
movieItems
        }
    </ul>
    <button onClick={handleReverseMovies}>Reverse Movies</button>
</div>
    )
}

export default MovieLists