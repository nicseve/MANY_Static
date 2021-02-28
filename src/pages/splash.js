import React from "react";
import NavigationButton from "../components/navigationButton";
import {forwardButtonIcon} from '../assets/icons/index'
import manyLogoLarge from "../assets/logos/MANY_Large.png"


export default class Splash extends React.Component {
    render() {
        const homeButtonDisplayComponent = <img src={forwardButtonIcon} alt="home button"/>

        return (
            <div>
                <img src={manyLogoLarge} alt="MANY logo"/>
                <NavigationButton path={'/home'} displayComponent={homeButtonDisplayComponent}/>
            </div>
        )
    }
}

