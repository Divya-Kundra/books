import { useEffect, useState } from "react"
import { getBookById } from "../api.js"
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function BookId() {

    const [book, setBook] = useState({}) 
    const [searchParams] = useSearchParams();

    const {bookId} = useParams()
    console.log('bookId', bookId)


    useEffect(() => {
        getBookById(bookId)
        .then((res) => {
            console.log('respone is', res)
            setBook(res.data)
        })

    }, [])
    return (
    <div className="book">
        <h1 className="title">{book.Title}</h1>
        <h2 className="subtitle">Published by {book.Publisher} in {book.Year}</h2>
        <div className="villains-section"> <strong>Villains that appeared</strong> 
        <ul>
           { book.villains && book.villains.map(function (elem)  {
            const id = elem.url.substring(elem.url.lastIndexOf("/") + 1)
            return <li key={elem.name}> <Link to={`/villains/${id}`}>{elem.name}</Link></li>
           })
        }
        </ul>
         </div>
    </div>
    
    )
}

export default BookId