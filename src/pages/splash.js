import React from "react";
import {NavigationButton, ManyLogo, IphoneFrame, ContainerDiv, PageGrid} from "../components/index";
import {forwardButtonIcon} from '../assets/icons/index'


export default class Splash extends React.Component {
    render() {
        const homeButtonDisplayComponent = <img src={forwardButtonIcon} alt="home button"/>

        return (
            <ContainerDiv>
                <IphoneFrame/>
                <PageGrid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <ManyLogo/>
                    <NavigationButton path={'/home'} displayComponent={homeButtonDisplayComponent}/>
                </PageGrid>
            </ContainerDiv>
        )
    }
}

