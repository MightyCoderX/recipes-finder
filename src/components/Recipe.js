import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import { APIContext } from '../API';
import ErrorMessage from './ErrorMessage';

function Recipe()
{
    const { id } = useParams();
    const { getEndpointUrl } = useContext(APIContext);
    console.log();
    const { data: recipe, error, isPending } = useFetch(getEndpointUrl(`/${id}/information`));

    return (
        <div>
            {error && <ErrorMessage message={error} />}
            {isPending && <div>Loading...</div>}
            {recipe && (
                <h1>{recipe.title}</h1>
                
            )}
        </div>
    )
}

export default Recipe;
