import { GitHub } from '@mui/icons-material';
import '../css/about.css';

function About()
{
    return (
        <div className="about">
            <h2>About</h2>
            <h3 className="made-by">
                Made by <span>MightyCoderX</span> with <a 
                        href="https://reactjs.org/" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                <img 
                    src="/react.ico" 
                    alt="React"
                />
                </a>
            </h3>
            <h3>
                <b>&copy;</b> Copyright <span>MightyCoderX</span> 2022 <a 
                    href="https://github.com/MightyCoderX" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <GitHub style={{ display: 'inline' }} />
                </a>
            </h3>
        </div>
    )
}

export default About;
