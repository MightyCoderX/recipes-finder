import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { APIProvider } from './API';
import Home from './components/Home/Home';
import Header from './components/Header';
import Recipe from './components/Recipe/Recipe';
import About from './components/About';

function App()
{
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="content">
                    <APIProvider>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/recipe/:id">
                                <Recipe />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </APIProvider>
                </div>
            </div>
        </Router>
    );
}

export default App;
