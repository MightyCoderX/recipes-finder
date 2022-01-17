function Ingredient({ image, amount, unit, name })
{
    return (
        <div>
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`} alt={name}/>
            <span className="ingredient-amount">{`${amount} ${unit}`}</span>&nbsp;
            <span className="ingredient-name">{name}</span>
        </div>
    );
}

export default Ingredient;
