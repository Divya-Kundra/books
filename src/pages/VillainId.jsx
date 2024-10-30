import { getVillainById } from "../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function VillainId () {
    const {villainId} = useParams()
    const [villain, setVillain] = useState({}) 

    useEffect(() => {
        getVillainById(villainId)
        .then((res) => {
            console.log('respone is', res)
            setVillain(res.data)
        })
     }, [])

    return(
        <div className="center-content">
        <h1 className="title">{villain.name}</h1>
        <h2 className="subtitle">{villain.gender}</h2>


         { villain.books?.length > 0  && 
         <div className="list-section"><strong>Appeared in Books</strong>
        <ul>
           { villain.books && villain.books.map(function (elem)  {
            const id = elem.url.substring(elem.url.lastIndexOf("/") + 1)
            return <li key={elem.title}> <Link to={`/books/${id}`} className="link">{elem.title}</Link></li>
           })
        }
        </ul>
    </div> 
    }


    { villain.shorts?.length > 0 && 
         <div className="list-section"><strong>Appeared in Shorts</strong>
        <ul>
           { villain.shorts && villain.shorts.map(function (elem)  {
            const id = elem.url.substring(elem.url.lastIndexOf("/") + 1)
            return <li key={elem.title}> <Link to={`/short/${id}`} className="link">{elem.title}</Link></li>
           })
        }
        </ul>
     </div> 
        }


    </div>
    )
}

export default VillainId