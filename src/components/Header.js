import { HomeRounded, InfoOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header()
{
    const breakpoint = 750;
    const [isNarrow, setIsNarrow] = useState(window.innerWidth <= breakpoint);

    useEffect(() =>
    {
        const resizeHandler = () =>
        {
            setIsNarrow(window.innerWidth <= breakpoint);
        }

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className="header">
            <h1 className="logo">RecipesFinder</h1>
            <nav className="nav-links">
                <Link to="/" className={document.location.pathname === '/' ? 'active' : ''}>
                    { isNarrow ? <HomeRounded title="Home"/> : 'Home' }
                </Link>
                <Link to="/about" className={document.location.pathname === '/about' ? 'active' : ''}>
                    { isNarrow ? <InfoOutlined title="About"/> : 'About' }
                </Link>
            </nav>
        </div>
    );
}

export default Header;
