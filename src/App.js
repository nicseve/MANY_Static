import React from 'react';
import './App.css';
import {Home,Splash} from './pages/index.js'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Splash</Link>
                    </li>
                    <li>
                        <Link to="/about">Home</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Splash/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
