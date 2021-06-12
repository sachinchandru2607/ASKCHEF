import { useEffect, useState } from "react";
import Recipe from "./components/Recipe"
import Header from "./components/Header"
import "./App.css";


const App = () => {
const APP_ID = "ce46facb";
const APP_KEY = "011c0ec466e184b83462a5a575b0b337";

const [recipes, setRecipes] = useState([]);
const [searchTxt, setSearchTxt] = useState("");
const [query, setQuery] = useState("");

useEffect(() => {
getRecipes();
},[query]);

const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
setRecipes(data.hits);
};

const updateSearchText = e => {
setSearchTxt(e.target.value);
}

const updateQuery = e => {
e.preventDefault();
setQuery(searchTxt);
setSearchTxt("");
};

return (
<div>
<div className = "App">
<Header />
<div clasName= "search">
<form onSubmit = {updateQuery}>
<input type = "text" className = "searchField" placeholder="Search.." onChange = {updateSearchText} value={searchTxt}/>
<button type = "submit" className = "searchButton"><i class="fa fa-search"></i></button>
</form>
</div>
<br />
</div>
<div className = "cards">
{recipes.map(recipe => {
return (
<div>
<br />
<Recipe key= {recipe.recipe.label} recipe = {recipe.recipe}/>
</div>
)
})}
</div>
</div>
);
}

export default App;
