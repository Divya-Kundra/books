import { getShortById } from "../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ShortId() {
 const {shortId} = useParams()
 const [short, setShort] = useState() 

 useEffect(() => {
    getShortById(shortId)
    .then((res) => {
        setShort(res.data)
    })
 }, [])


 return (
   <>
   { short && <div className="center-content">
    <h1 className="title">{short.title}</h1>
    <h2 className="subtitle">{`Published in ${short.year} as ${short.type}`}</h2>
     { short.villain?.length && 
     <div className="list-section"><strong>Villains that appeared</strong>
    <ul>
       { short.villains && short.villains.map(function (elem)  {
        const id = elem.url.substring(elem.url.lastIndexOf("/") + 1)
        return <li key={elem.name} > <Link to={`/villains/${id}`} className="link">{elem.name}</Link></li>
       })
    }
    </ul>
 </div> 
    }
</div> }
   </>

 )
}

export default ShortId