import React from 'react';
import {useHistory} from 'react-router-dom';
// import * as buttonStyles from '../styles/buttons'

// Valid props: path,icon.
const NavigationButton = (props) => {
    const history = useHistory();
    const handleClick = () => history.push(props.path);

    return (
        <button onClick={handleClick}>
            {props.displayComponent}
        </button>
    );
};

export default NavigationButton

