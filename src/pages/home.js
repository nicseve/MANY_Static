import React from 'react';
import MANYLogoLarge from "../assets/logos/MANY_Large.png"
import * as typographyStyles from "../styles/typography"
import {Grid} from "@material-ui/core";
import {PageContainer, PageGrid, NavigationButton} from "../components/index";
import iphone from '../assets/images/iphone.png'


export default class Home extends React.Component {

    render() {
        const signInButtonDisplayComponent = <text style={typographyStyles.cushingTextBase}>Sign In</text>
        const createGroupButtonDisplayComponent = <text style={typographyStyles.cushingTextBase}>Create a group</text>
        const viewPrevGroupsButtonDisplayComponent = <text style={typographyStyles.cushingTextBase}>View previous
            groups</text>

        return (
            <div style={{
                zIndex: 'auto',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'whitesmoke'
            }}>
                {/*<PageContainer maxWidth="xs">*/}
                <img style={{zIndex: 1, margin: 'auto', position: 'absolute', maxHeight: '750px'}} src={iphone}
                     alt={'iPhone frame'}/>

                <PageGrid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    {/*<div style={{*/}
                    {/*    backgroundColor: 'blue',*/}
                    {/*    display: 'flex',*/}
                    {/*    flexDirection: 'column',*/}
                    {/*    minHeight:'65%',*/}
                    {/*    maxHeight: '65%',*/}
                    {/*    maxWidth:'30%',*/}
                    {/*    minWidth:'36%',*/}
                    {/*    justifyContent: 'center',*/}
                    {/*    alignItems: 'center',*/}
                    {/*    margin:'auto',*/}
                    {/*    // zIndex:1*/}
                    {/*}}>*/}

                    {/*<Grid item style={{paddingBottom: 80,alignItems:'center',width:'50%',maxWidth:'50%'}}>*/}
                    <img style={{maxWidth: '50%', maxHeight: '50%',paddingBottom:'30%'}} src={MANYLogoLarge} alt="MANY logo"/>
                    {/*</Grid>*/}

                    {/*<Grid item>*/}
                    <NavigationButton path={'/'}
                                      displayComponent={signInButtonDisplayComponent}/>
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    <NavigationButton path={'/whoGroup'}
                                      displayComponent={createGroupButtonDisplayComponent}/>
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    <NavigationButton path={'/'}
                                      displayComponent={viewPrevGroupsButtonDisplayComponent}/>
                    {/*</Grid>*/}
                    {/*</div>*/}

                </PageGrid>
                {/*</PageContainer>*/}
            </div>
        )
    }

}

