import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import { APIContext } from '../../API';
import ErrorMessage from '../ErrorMessage';
import LoadSpinner from '../LoadSpinner';
import RecipeInfo from './RecipeInfo';
import Ingredient from './Ingredient';
import "../../css/recipe.css";

function Recipe()
{
    const { id } = useParams();
    const { getEndpointUrl } = useContext(APIContext);

    // const { data: recipe, error, isPending } = useFetch(getEndpointUrl(`/${id}/information`));
    const { data: recipe, error, isPending } = useFetch(`http://${document.location.hostname}:8080/recipe.json`);

    return (
        <div className="recipe-container">
            {error && <ErrorMessage message={error} />}
            {isPending && <LoadSpinner />}
            {recipe && (
                <div className="recipe">
                    <div className="recipe-head">
                        <h1 className="recipe-title">{recipe.title}</h1>
                        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
                        <div className="recipe-info-container">
                            <RecipeInfo icon="attach_money" text={`${recipe.pricePerServing}`}/>
                            <RecipeInfo icon="schedule" text={`${recipe.readyInMinutes} min`}/>
                            <RecipeInfo icon="people" text={`${recipe.servings} servings`}/>
                            <RecipeInfo icon="favorite" text={`${recipe.spoonacularScore}`}/>
                        </div>
                    </div>

                    <div className="recipe-body">
                        <p className="summary" dangerouslySetInnerHTML={{ __html: recipe.summary}} />

                        <h1>Ingredients</h1>
                        <div className="ingredients">
                            {recipe.extendedIngredients.map((ing, index) =>
                                <Ingredient key={index}
                                    image={ing.image} 
                                    name={ing.originalName}
                                    info={ing.original}
                                />
                            )}
                        </div>

                        <h1>Instructions</h1>
                        <div className="instructions" dangerouslySetInnerHTML={{ __html: recipe.instructions}} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Recipe;
