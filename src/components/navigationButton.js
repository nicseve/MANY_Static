import React from 'react';
import {useHistory} from 'react-router-dom';

// Valid props: path,icon.
const NavigationButton = (props) => {
    const history = useHistory();
    const handleClick = () => history.push(props.path);
    const buttonDisplayComponent = props.displayComponent

    return (
        <button type="button" onClick={handleClick}>
            {buttonDisplayComponent}
        </button>
    );
};

export default NavigationButton

