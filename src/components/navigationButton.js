import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import styled from "styled-components";

// TODO: Add props to adjust width for inline nav buttons
const StyledButton = styled(Button)`
  height: 16%;
  z-index: 1;
`;

// Valid props: path,displayComponent,type(inline or block)
const NavigationButton = (props) => {
    const history = useHistory();
    const handleClick = () => history.push(props.path);

    return (
        <StyledButton onClick={handleClick}>
            {props.displayComponent}
        </StyledButton>
    );
};

export default NavigationButton

