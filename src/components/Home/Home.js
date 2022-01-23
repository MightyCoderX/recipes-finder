import { useContext, useState } from 'react';
import { APIContext } from '../../API';
import useFetch from '../../useFetch';
import RecipeCard from './RecipeCard';
import ErrorMessage from '../ErrorMessage';
import { ClearRounded, SearchRounded } from '@mui/icons-material';
import '../../css/home.css';
import GridPreviewItem from '../GridPreview/GridPreviewItem';
import GridPreview from '../GridPreview/GridPreview';

function Home()
{
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    const { getEndpointUrl } = useContext(APIContext);

    // const { data: recipes, error, isPending } = useFetch(getEndpointUrl(`/complexSearch`, {
    //     query,
    //     offset: 0,
    //     number: 100,
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
        <div className="home">
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
            <GridPreview count={10} />
            <div className="recipes-container">
                {error && <ErrorMessage message={error} />}
                
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
