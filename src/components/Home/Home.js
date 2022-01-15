import { useContext, useState } from 'react';
import { APIContext } from '../../API';
import useFetch from '../../useFetch';
import RecipeCard from './RecipeCard';
import ErrorMessage from '../ErrorMessage';

function Home()
{
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    const { getEndpointUrl } = useContext(APIContext);

    console.log(getEndpointUrl(`/complexSearch`, {
        query,
        offset: 0,
        number: 10,
        diet: 'vegetarian'
    }));
    const { data: recipes, error, isPending } = useFetch();

    const getSearch = e =>
    {
        e.preventDefault();

        if(!search.trim()) return; 
        setQuery(search);
        setSearch('');
    }

    const updateSearch = (e) =>
    {
        setSearch(e.target.value);
    }

    return (
        <div>
            <form className="search-form" onSubmit={getSearch}>
                <label>
                    Search
                    <input type="search" name="" value={search} onChange={updateSearch}></input>
                </label>
            </form>
            
            <div className="recipes-container">
                {error && <ErrorMessage message={error} />}
                {isPending && <div>Loading...</div>}
                {recipes &&
                    recipes.results.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
