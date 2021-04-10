import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import styled from "styled-components";

const StyledButton = styled(Button)`
  height: ${props => props.height ? props.height : '30px' };
  width: ${props => props.width ? props.width : '90px' };
  z-index: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const NavigationButton = (props) => {
    const history = useHistory();
    const handleClick = () => history.push({
        pathname: props.path,
        navProps: props.navProps,
    });

    return (
        <StyledButton height={props.height} width={props.width} onClick={handleClick}>
            {props.displayComponent}
        </StyledButton>
    );
};

export default NavigationButton

