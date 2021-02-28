import React from 'react';
import './App.css';
import {Home,Splash} from './pages/index.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
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
