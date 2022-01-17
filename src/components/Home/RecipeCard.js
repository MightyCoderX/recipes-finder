import { Link } from 'react-router-dom';

function RecipeCard({ recipe })
{
    const {id, title, image} = recipe;
    
    return (
        <Link to={`/recipe/${id}`} className="link-wrapper">
            <div className="recipe-card">
                <img src={image} alt={title} />
                <h3>{title}</h3>
            </div>
        </Link>
    );
}

export default RecipeCard;
