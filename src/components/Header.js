import { HomeRounded, InfoOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header()
{
    const location = useLocation();

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
            <Link to="/" className="logo">RecipesFinder</Link>
            <nav className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                    { isNarrow ? <HomeRounded title="Home"/> : 'Home' }
                </Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                    { isNarrow ? <InfoOutlined title="About"/> : 'About' }
                </Link>
            </nav>
        </div>
    );
}

export default Header;
