import React from 'react';
import NavigationButton from "../components/navigationButton";
import MANYLogoLarge from "../assets/logos/MANY_Large.png"

export default class Home extends React.Component {
    render() {
        const signInButtonDisplayComponent = <text>Sign In</text>
        const createGroupButtonDisplayComponent = <text>Create a group</text>
        const viewPrevGroupsButtonDisplayComponent = <text>View previous groups</text>

        return (
            <div>
                <img src={MANYLogoLarge} alt="MANY logo"/>
                <NavigationButton path={'/'} displayComponent={signInButtonDisplayComponent}/>
                <NavigationButton path={'/'} displayComponent={createGroupButtonDisplayComponent}/>
                <NavigationButton path={'/'} displayComponent={viewPrevGroupsButtonDisplayComponent}/>
            </div>
        )
    }
}

