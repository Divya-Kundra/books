import "../styles/Card.css";
import { useNavigate } from "react-router-dom";

function Card({ category, emptyCard, title, publisher, name, type, gender, year, pageCount, shortsType, id, notes}) {

  const navigate = useNavigate();


  function handleClick() {
   navigate(`${category}/${id}`)

  }

  const booksMarkup = <><h2 style={{color : 'var(--text-primary'}}>{title}</h2><p> Published by {publisher}</p><p> Year {year} </p><p> {pageCount} Pages</p></>

  const shortsMarkup = <> <h2 style={{color : 'var(--text-primary)'}}>{title}</h2>
  <p>{type}</p>
  <p>{shortsType && shortsType.slice(0,1).toUpperCase() + shortsType.slice(1)}</p>
  <p>{year}</p></>

  const villainsMarkup = <><h2 style={{color : 'var(--text-primary)'}}>{name}</h2>
  <p>{gender}</p>
  <p>{notes && [...notes].slice(0,3).join(', ')}</p></>

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
