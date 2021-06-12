
const Recipe = (props) => {
    const ingrds = props.recipe.ingredientLines;
    console.log(ingrds);
return (
    <div>
    <div className = "recipe-card">
        <img src={props.recipe.image} alt={props.recipe.title} style={{width:100+"%"}} />
        <div className ="container">
            <h4><b>{props.recipe.label}</b></h4> 
        </div>
        <br />
    </div>
    <div className = "ingrds-card">
        <ul>
        {ingrds.map((step) => {
            return <li>{step}</li>
        })}
        </ul>
    </div>
    </div>
);
};

export default Recipe;