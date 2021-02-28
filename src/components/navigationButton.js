import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as buttonStyles from '../styles/buttons'

// Valid props: path,icon.
const NavigationButton = (props) => {
    const history = useHistory();
    const handleClick = () => history.push(props.path);

    return (
        <Button variant="light" onClick={handleClick}>
            {props.displayComponent}
        </Button>
    );
};

export default NavigationButton

