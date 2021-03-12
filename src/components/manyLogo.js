import MANYLogoLarge from "../assets/logos/MANY_Large.png";
import React from "react";
import styled from 'styled-components';

const ManyLogoStyled = styled.img`
{
  max-width: 70%;
  max-height: 40%;
  padding-bottom: 30%;
}
`

const ManyLogo = (props) => {
    return <ManyLogoStyled src={MANYLogoLarge} alt="MANY logo"/>
}

export default ManyLogo
