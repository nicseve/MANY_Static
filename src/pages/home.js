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
                <div
                    style={{
                        maxWidth: '305px',
                        width:'305px',
                        height:'537px',
                        minHeight: '537px',
                        backgroundColor:'whitesmoke',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                <IphoneFrame/>

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

