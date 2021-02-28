import React from 'react';
import {forwardButtonIcon,backButtonIcon} from "../assets/icons/index"
import {useHistory} from 'react-router-dom';

// Valid props: path,direction.
const NavigationButton = (props) => {
    const history = useHistory();
    const handleClick = () => history.push(props.path);
    const icon = props.direction === "forward" ? forwardButtonIcon : backButtonIcon

    return (
        <button type="button" onClick={handleClick}>
            <img src={icon} alt="logo"/>
        </button>
    );
};

export default NavigationButton


