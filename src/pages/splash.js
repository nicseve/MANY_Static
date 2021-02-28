import React from "react";
import NavigationButton from "../components/navigationButton";

export default class Splash extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>SPLASH</h1>
                    <NavigationButton path={'/home'} direction={'forward'}/>
                </header>
            </div>
        )
    }
}

