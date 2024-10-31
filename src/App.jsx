import { useEffect, useState } from "react";
import "./App.css";
import { getBooks } from "./api.js";
import Card from "./components/Card.jsx";
import Btn from  "./components/Btn.jsx"
import lens from './images/magnifying-lens.png'
import useDebounce from "./custom-hooks/useDebounce.js";
import Switch from "./components/Switch";
import store from "./store.jsx";

function App() {
  const [apiResponse, setApiResponse] = useState([])
  const [loading, setLoading] = useState(true)
  const [renderData, setRenderData] = useState([])
  const emptyCards = new Array(32).fill(0)
  const loadDataDebounced = useDebounce(loadData, 400)
  const categoryTitleMap = {
    'books' : 'Title',
    'shorts' : 'title',
    'villains' : 'name'
  }
  const category = store.getState().value

  useEffect(() => {
     getBooks(category) 
      .then((res) => {
        setLoading(false)
        setApiResponse(res.data)
        setRenderData(res.data)
      })
      .catch((err) => console.log(err));

  }, [category]);


  function loadData (value){
    const lowerCase = value.toLowerCase()
    const searchData = apiResponse.filter((elem) => {
      return ((elem[categoryTitleMap[category]]).toLowerCase()).includes(lowerCase)
    })
    setRenderData(searchData)
  }

  function handleOnCategoryChange(value) {
    setLoading(true)
    store.dispatch({ type: 'category/update', payload: value })
  }


  return (
    <div className="App">
      <h1 className="landing-headline">Work of Stephan King</h1>
      <Switch></Switch>
      <div className="action-controls">
      <div className="search-bar">
        <img className="lens-img" width="20px" height= "20px" src={lens}></img>
        <input className="search-input" 
              placeholder={`Search with ${category.substring(0, category.length-1)} name keywords`}
              onChange={(e) => loadDataDebounced(e.target.value)}></input>
      </div>

        <div className="form-wrapper">
          <label  id="filter-by-label" htmlFor="category-list">Filter By</label>
          <select name="category" 
                        value={category}
                  onChange={(e) =>handleOnCategoryChange(e.target.value)} id = "category-list" className="select-container" >
            <option value="books" className="option-style">Books</option>
            <option value="shorts" className="option-style">Shorts</option>
            <option value="villains" className="option-style">Villains</option>
          </select>
        </div>
        </div>
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
          { renderData && renderData.map((element, index) => {
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
    </div>
  );
}

export default App;