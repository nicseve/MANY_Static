import iphone from "../assets/images/iphone.png";
import styled from 'styled-components';
import React from "react";

const IphoneFrameStyled = styled.img`
{
  z-index: 1;
  margin: auto;
  position: absolute;
  max-height: 750px
}`
{/*The iPhone frame is fixed to avoid resizing with the viewport*/}
const IphoneFrame = () => {
    return <IphoneFrameStyled src={iphone}
                              alt={'iPhone frame'}/>
}

export default IphoneFrame



