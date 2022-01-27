import { useContext, useState } from 'react';
import { APIContext } from '../../API';
import useFetch from '../../useFetch';
import RecipeCard from './RecipeCard';
import ErrorMessage from '../ErrorMessage';
import { ClearRounded, SearchRounded } from '@mui/icons-material';
import '../../css/home.css';
import GridPreview from '../GridPreview/GridPreview';

function Home()
{
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    const { getEndpointUrl, getErrorMessage } = useContext(APIContext);

    const { data: recipes, error } = useFetch(getEndpointUrl(`/complexSearch`, {
        query,
        offset: 0,
        number: 20,
        diet: 'vegetarian'
    }));

    // Sample data
    // let { data: recipes, error, isPending } = useFetch(`http://${document.location.hostname}:8080/recipes.json`);

    const getSearch = e =>
    {
        e.preventDefault();

        if(!search.trim()) return;
        setQuery(search);
    }

    const updateSearch = (e) =>
    {
        setSearch(e.target.value);
    }

    const clearSearch = () =>
    {
        setSearch('');
        setQuery('');
    }

    return (
        <div className="home">
            <form className="search-form" onSubmit={getSearch}>
                <label>
                    <input type="text" value={search} onChange={updateSearch} placeholder=" " />
                    <span className="placeholder">
                        Search...
                    </span>
                    { 
                        !query ? 
                            <div className="icon" onClick={getSearch}>
                                <SearchRounded  />
                            </div>
                        : 
                            <div className="icon" onClick={clearSearch}>
                                <ClearRounded />
                            </div>
                    }
                </label>
            </form>

            {!error && <GridPreview count={10} />}
            <div className="recipes-container">
                {error && <ErrorMessage message={getErrorMessage(error)} />}
                
                {recipes &&
                    recipes.results.slice(0, 20).map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
