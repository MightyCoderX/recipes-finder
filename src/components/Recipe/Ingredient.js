function Ingredient({ image, name, info })
{
    return (
        <div className="ingredient">
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`} alt={name}/>
            <span className="ingredient-info">{info}</span>
        </div>
    );
}

export default Ingredient;
