import { Link } from 'react-router-dom';

function Header()
{
    return (
        <div className="header">
            <h1 className="logo">Vegetarian Recipes</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}

export default Header;
