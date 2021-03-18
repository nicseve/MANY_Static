import MANYLogoLarge from "../assets/many/MANY_Large.png";
import React from "react";
import styled from 'styled-components';

const ManyLogoStyled = styled.img`
{
  max-width: 70%;
  max-height: 40%;
}
`

const ManyLogo = (props) => {
    return <ManyLogoStyled src={MANYLogoLarge} alt="MANY logo"/>
}

export default ManyLogo
