  
function Btn({name, clickHandler}) {
    return(
    <button className="btn" type="button" onClick={() => clickHandler()}>{name}</button>
    )
}

export default Btn