import React from "react";
import {NavigationButton, IphoneScreen, ManyLogo, IphoneFrame, MainContainer} from "../components/index";
import {forwardButtonIcon} from '../assets/icons/index'


export default class Splash extends React.Component {
    render() {
        const homeButtonDisplayComponent = <img src={forwardButtonIcon} alt="home button"/>

        return (
            <MainContainer>
                <IphoneFrame/>
                <IphoneScreen>
                    <ManyLogo/>
                    <NavigationButton path={'/home'} displayComponent={homeButtonDisplayComponent}/>
                </IphoneScreen>
            </MainContainer>
        )
    }
}

