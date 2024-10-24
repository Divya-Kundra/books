import { getShortById } from "../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ShortId() {
 const {shortId} = useParams()
 const [short, setShort] = useState({}) 

 useEffect(() => {
    getShortById(shortId)
    .then((res) => {
        console.log('respone is', res)
        setShort(res.data)
    })
 }, [])


 return (
    <div className="book">
    <h1 className="title">{short.Title}</h1>
    <h2 className="subtitle">Published in {short.year}</h2>
    <h3 >Type of {short.type} novel </h3>
     { short.villains && 
     <div className="villains-section"><strong>Villains that appeared</strong>
    <ul>
       { short.villains && short.villains.map(function (elem)  {
        const id = elem.url.substring(elem.url.lastIndexOf("/") + 1)
        console.log('id',id)
        return <li key={elem.name}> <Link to={`/villains/${id}`}>{elem.name}</Link></li>
       })
    }
    </ul>
 </div> 
    }
</div>
 )
}

export default ShortId