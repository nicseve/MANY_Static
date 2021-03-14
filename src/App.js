import React from 'react';
import './App.css';
import {Home, Splash, WhoGroup, WhatDuration,WhatDurationMonths,Matching} from './pages/index.js'
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
                    <Route path="/whoGroup">
                        <WhoGroup/>
                    </Route>
                    <Route path="/whatDuration">
                        <WhatDuration/>
                    </Route>
                    <Route path="/whatDurationMonths">
                        <WhatDurationMonths/>
                    </Route>
                    <Route path="/matching">
                        <Matching/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
