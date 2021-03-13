import React from 'react';
import {NavigationButton, ContainerDiv, TextBaseCush, IphoneFrame, ManyLogo} from "../components/index";
import Grid from '@material-ui/core/Grid';

export default class Home extends React.Component {

    render() {
        const signInButtonDisplayComponent = <TextBaseCush>Sign in</TextBaseCush>
        const createGroupButtonDisplayComponent = <TextBaseCush>Create a group</TextBaseCush>
        const viewPrevGroupsButtonDisplayComponent = <TextBaseCush>View previous groups</TextBaseCush>

        return (
            <ContainerDiv>
                <IphoneFrame/>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {/*//TODO: Make logo a nav button to info page*/}
                    <ManyLogo/>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        <NavigationButton path={'/'}
                                          displayComponent={signInButtonDisplayComponent}/>
                        <NavigationButton path={'/whoGroup'}
                                          displayComponent={createGroupButtonDisplayComponent}/>
                        <NavigationButton path={'/'}
                                          displayComponent={viewPrevGroupsButtonDisplayComponent}/>
                    </div>
                </div>
            </ContainerDiv>
        )
    }

}

