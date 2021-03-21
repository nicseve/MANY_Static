import React from "react";
import {NavigationButton, IphoneScreen, ManyLogo, IphoneFrame, MainContainer} from "../components/index";
import {forwardButtonIcon} from '../assets/icons/index'


export default class Splash extends React.Component {

    render() {
        return (
            <MainContainer>
                <IphoneFrame/>
                <IphoneScreen>
                    <div style={{marginTop:'175px'}}>
                        <NavigationButton height='80px' path={'/home'} displayComponent=<ManyLogo/>/>
                    </div>
                </IphoneScreen>
            </MainContainer>
        )
    }
}

