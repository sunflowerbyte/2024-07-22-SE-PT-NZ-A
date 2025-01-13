import BookList from "./BookList"
import BooksFilter from "./BooksFilter"

function Books(props)
{
    const newbooks = ["Harry Potter", "Lord of the Rings", "XYZ"]

    return(
        <>
        <div>
            <p>Books parent component</p>
        </div>
        {props.children}
        <BookList newBooks={newbooks}></BookList>
        <BooksFilter newBooks={newbooks}></BooksFilter>
        </>
    )
}

export default Books