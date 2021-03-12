import React from 'react';
import MANYLogoLarge from "../assets/logos/MANY_Large.png"
import {PageGrid, NavigationButton, ContainerDiv, TextBaseCush, IphoneFrame, ManyLogo} from "../components/index";

export default class Home extends React.Component {

    render() {
        const signInButtonDisplayComponent = <TextBaseCush>Sign in</TextBaseCush>
        const createGroupButtonDisplayComponent = <TextBaseCush>Create a group</TextBaseCush>
        const viewPrevGroupsButtonDisplayComponent = <TextBaseCush>View previous groups</TextBaseCush>

        return (
            <ContainerDiv>
                <IphoneFrame/>
                <PageGrid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <ManyLogo/>
                    <NavigationButton path={'/'}
                                      displayComponent={signInButtonDisplayComponent}/>
                    <NavigationButton path={'/whoGroup'}
                                      displayComponent={createGroupButtonDisplayComponent}/>
                    <NavigationButton path={'/'}
                                      displayComponent={viewPrevGroupsButtonDisplayComponent}/>
                </PageGrid>
            </ContainerDiv>
        )
    }

}

