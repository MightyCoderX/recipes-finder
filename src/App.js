import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./components/Home/Home";
import Header from "./components/Header";
import Recipe from './components/Recipe';
import { APIProvider } from './API';

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
                        </Switch>
                    </APIProvider>
                </div>
            </div>
        </Router>
    );
}

export default App;
