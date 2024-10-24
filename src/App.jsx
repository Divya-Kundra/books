import { useEffect, useState } from "react";
import "./App.css";
import { getBooks } from "./api.js";
import Card from "./components/Card.jsx";
import Btn from  "./components/Btn.jsx"
import lens from './images/magnifying-lens.png'
import useDebounce from "./custom-hooks/useDebounce.js";
import { useNavigate } from "react-router-dom";
import Switch from "./components/Switch";

function App() {
  const [apiResponse, setApiResponse] = useState([])
  const [category, setCategory] = useState('books')
  const [loading, setLoading] = useState(true)
  const emptyCards = new Array(32).fill(0)
  // const loadDataDebounced = useDebounce(loadData, 400)

  useEffect(() => {
     getBooks(category) 
      .then((res) => {
        console.log('use effect category', category)
        setLoading(false)
        setApiResponse(res.data)
        console.log('res is', res.data)
      })
      .catch((err) => console.log(err));

  }, [category]);


  // function btnHandler (direction = "next") {
  //   setLoading(true)
  //   if(direction === "next") {
  //     if(apiResponse.next) {
  //       setUrl(apiResponse.next)
  //     }
  //   } else {
  //     if(apiResponse.previous) {
  //       setUrl(apiResponse.previous)
  //     }
  //   }
  // }

  // function loadData (value){
  //   setUrl(`https://gutendex.com/books?search=${value}`)
  // }

  // function categoryChanged(value) {
  //   console.log('category changed is', value)
  //   setUrl(`https://stephen-king-api.onrender.com/api/${value}`)
  // }

  function handleOnCategoryChange(value) {
    setLoading(true)
    setCategory(value)
  }


  return (
    <div>
      {/* <div className="search-bar">
      <img className="lens-img" width="20px" height= "20px" src={lens}></img>
      <input className="search-input" 
             placeholder="Search with author or book name keywords"
             onChange={(e) => loadDataDebounced(e.target.value)}></input>
      </div> */}
      <div className="theme-selector">
      <Switch></Switch>
      </div>
      <form>
        <div className="form-wrapper">
        <label  id="filter-by-label" htmlFor="category-list">Filter By</label>
        <select name="category" onChange={(e) =>handleOnCategoryChange(e.target.value)} id = "category-list" className="select-container" >
          <option value="books" className="option-style">Books</option>
          <option value="shorts">Shorts</option>
          <option value="villains">Villains</option>
        </select>
        </div>
        </form>

      {/* Skeleton loading */}
       {loading && 
        <div className="card-container">
          {
           emptyCards.map((card, index) => {
              return(
                <Card
                emptyCard = {true}
                key={index}
              ></Card>
              )
            })
          }
        </div>
       }


      { !loading && <div className="card-container">
          { apiResponse && apiResponse.map((element, index) => {
            return (
                <Card
                  key={element.id}
                  id={element.id}
                  emptyCard={false}
                  title = {element.title || element.Title}
                  publisher = {element.Publisher}
                  shortsType={element.type}
                  name={element.name}
                  category={category}
                  gender={element.gender}
                  notes={element.notes}
                  year={element.Year || element.year}
                  pageCount={element.Pages}
                ></Card>
            );
          })}
        </div> }
        {/* <div className="pagination-btns">
          <Btn name="&lsaquo;" clickHandler={() => btnHandler('prev')}></Btn>
          <Btn name="&rsaquo;" clickHandler={() => btnHandler('next')}></Btn>
        </div> */}
    </div>
  );
}

export default App;