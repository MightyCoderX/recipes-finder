import { useContext, useState } from 'react';
import { APIContext } from '../../API';
import useFetch from '../../useFetch';
import RecipeCard from './RecipeCard';
import ErrorMessage from '../ErrorMessage';
import LoadSpinner from '../LoadSpinner';
import { ClearRounded, SearchRounded } from '@mui/icons-material';

function Home()
{
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    const { getEndpointUrl } = useContext(APIContext);

    // const { data: recipes, error, isPending } = useFetch(getEndpointUrl(`/complexSearch`, {
    //     query,
    //     offset: 0,
    //     number: 10,
    //     diet: 'vegetarian'
    // }));

    //Sample data
    const { data: recipes, error, isPending } = useFetch(`http://${document.location.hostname}:8080/recipes.json`);

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

    return (
        <div style={{marginTop: '1rem'}}>
            <form className="search-form" onSubmit={getSearch}>
                <label>
                    <input placeholder="Search..." type="text" value={search} onChange={updateSearch} />
                    { 
                        !query ? 
                            <SearchRounded onClick={getSearch} />
                        : 
                            <ClearRounded onClick={ () =>
                            {
                                setSearch('');
                                setQuery('');
                            }}/>
                    }
                </label>
            </form>
            
            <div className="recipes-container">
                {error && <ErrorMessage message={error} />}
                {isPending && <LoadSpinner />}
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
