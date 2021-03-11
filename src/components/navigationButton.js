import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button'

// Valid props: path,displayComponent
const NavigationButton = (props) => {
    const history = useHistory();
    const handleClick = () => history.push(props.path);

    return (
        <Button style={{size:'auto'}} onClick={handleClick}>
            {props.displayComponent}
        </Button>
    );
};

export default NavigationButton

