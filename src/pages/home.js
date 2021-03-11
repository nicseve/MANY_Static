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
            <div style={{zIndex: 'auto', backgroundColor: 'whitesmoke'}}>
                <PageContainer maxWidth="xs">
                    {/*<PageGrid*/}
                    {/*    // style={{backgroundColor:"blue"}}*/}
                    {/*    container*/}
                    {/*    direction="column"*/}
                    {/*    justify="center"*/}
                    {/*    alignItems="center"*/}
                    {/*>*/}
                        <img style={{paddingTop:'60px',position: 'absolute', height: '700px'}} src={iphone} alt={'iPhone frame'}/>

                        {/*<Grid item style={{paddingBottom: 80,alignItems:'center',width:'50%',maxWidth:'50%'}}>*/}
                            <img style={{maxWidth:'100%',minWidth:'100%'}} src={MANYLogoLarge} alt="MANY logo"/>
                        {/*</Grid>*/}

                        {/*<Grid item>*/}
                            <NavigationButton style={{maxWidth:'50%',minWidth:'50%'}} path={'/'} displayComponent={signInButtonDisplayComponent}/>
                        {/*</Grid>*/}
                        {/*<Grid item>*/}
                            <NavigationButton style={{maxWidth:'50%',minWidth:'50%'}} path={'/whoGroup'} displayComponent={createGroupButtonDisplayComponent}/>
                        {/*</Grid>*/}
                        {/*<Grid item>*/}
                            <NavigationButton style={{maxWidth:'50%',minWidth:'50%'}} path={'/'} displayComponent={viewPrevGroupsButtonDisplayComponent}/>
                        {/*</Grid>*/}


                    {/*</PageGrid>*/}
                </PageContainer>
            </div>
        )
    }
}

