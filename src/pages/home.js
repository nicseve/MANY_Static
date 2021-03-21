import React from 'react';
import {NavigationButton, IphoneScreen, MainContainer, TextBaseCush, IphoneFrame, ManyLogo} from "../components/index";

export default class Home extends React.Component {

    render() {
        const signInButtonDisplayComponent = <TextBaseCush>Sign in</TextBaseCush>
        const createGroupButtonDisplayComponent = <TextBaseCush>Create a group</TextBaseCush>
        const viewPrevGroupsButtonDisplayComponent = <TextBaseCush>View previous groups</TextBaseCush>

        return (
            <MainContainer>
                <IphoneFrame/>
                <IphoneScreen>
                    {/*//TODO: Make logo a nav button to info page*/}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '90px',
                        marginTop: '200px'
                    }}>
                        <ManyLogo/>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            <NavigationButton path={'/'}
                                              displayComponent={signInButtonDisplayComponent}/>
                            <NavigationButton path={'/whoGroup'}
                                              displayComponent={createGroupButtonDisplayComponent}/>
                            <NavigationButton path={'/matching'}
                                              displayComponent={viewPrevGroupsButtonDisplayComponent}/>
                        </div>
                    </div>
                </IphoneScreen>
            </MainContainer>
        )
    }

}

