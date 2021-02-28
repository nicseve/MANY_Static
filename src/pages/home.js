import React from 'react';
import NavigationButton from "../components/navigationButton";

export default class Home extends React.Component {
    render() {
        return (
            <view>
                <h1>HOME</h1>
                <NavigationButton path={'/'} direction={'back'}/>
            </view>)
    }
}
