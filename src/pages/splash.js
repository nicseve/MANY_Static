import React from "react";
import logo from '../assets/logos/MANY_Large.png';

export default class Splash extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} alt="logo"/>
                </header>
            </div>
        )
    }
}

