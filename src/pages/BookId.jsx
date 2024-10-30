import { useEffect, useState } from "react"
import { getBookById } from "../api.js"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function BookId() {

    const [book, setBook] = useState() 
    const {bookId} = useParams()

    useEffect(() => {
        getBookById(bookId)
        .then((res) => {
            setBook(res.data)
        })
    }, [])
    
    return (
        <>
    { book && <div className="center-content">
        <h1 className="title">{book.Title}</h1>
        <h2 className="subtitle"><strong>Published by {book.Publisher} in {book.Year}</strong></h2>
       { book.villains?.length > 0 && <div className="list-section"> <h2>Villains that appeared in the book</h2> 
        <ul>
           { book.villains && book.villains.map(function (elem)  {
            const id = elem.url.substring(elem.url.lastIndexOf("/") + 1)
            return <li key={elem.name}> <Link to={`/villains/${id}`} className="link">{elem.name}</Link></li>
           })
        }
        </ul>
         </div>
}
    </div>
}
    </>
    )
}

export default BookId