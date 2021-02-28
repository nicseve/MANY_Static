import React from 'react';
import NavigationButton from "../components/navigationButton";
import MANYLogoLarge from "../assets/logos/MANY_Large.png"
import * as typographyStyles from "../styles/typography"

export default class Home extends React.Component {
    render() {
        const signInButtonDisplayComponent = <text style={typographyStyles.cushingTextBase}>Sign In</text>
        const createGroupButtonDisplayComponent = <text style={typographyStyles.cushingTextBase}>Create a group</text>
        const viewPrevGroupsButtonDisplayComponent = <text style={typographyStyles.cushingTextBase}>View previous groups</text>

        return (
            <div className={'App-header'} >

                <img src={MANYLogoLarge} alt="MANY logo"/>
                <NavigationButton path={'/'} displayComponent={signInButtonDisplayComponent}/>
                <NavigationButton path={'/'} displayComponent={createGroupButtonDisplayComponent}/>
                <NavigationButton path={'/'} displayComponent={viewPrevGroupsButtonDisplayComponent}/>
            </div>
        )
    }
}

