import "../styles/Card.css";
import { useNavigate } from "react-router-dom";

function Card({ category, emptyCard, title, publisher, name, type, gender, year, pageCount, shortsType, id}) {


  const navigate = useNavigate();


  function handleClick() {
   navigate(`${category}/${id}`)

  }

  const booksMarkup = <><h1>{title}</h1><p> Published by {publisher}</p><p> Year {year} </p><p> {pageCount} Pages</p></>

  const shortsMarkup = <> <h1>{title}</h1>
  <p>{type}</p>
  <p>{shortsType}</p>
  <p>{year}</p></>

  const villainsMarkup = <><h1>{name}</h1>
  <p>{type}</p>
  <p>{gender}</p></>

    if(emptyCard) {
      return (
        <div className="empty card" ></div>
      )

    }

    return (<div className="card"
                 onClick={handleClick}>
                  {
                    category === 'books' ? booksMarkup : category === 'shorts' ? shortsMarkup : villainsMarkup
                  }

    </div>)
}

export default Card;
