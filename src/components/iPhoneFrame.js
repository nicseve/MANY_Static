import iphone from "../assets/images/iphone.png";
import styled from 'styled-components';
import React from "react";

const IphoneFrameStyled = styled.img`
{
  z-index: 0;
  margin: auto;
  position: absolute;
  max-height: 750px
}`
{/*The iPhone frame is fixed to avoid resizing with the viewport. This limits accessibility and cross-device supportability.*/}
const IphoneFrame = () => {
    return <IphoneFrameStyled src={iphone}
                              alt={'iPhone frame'}/>
}

export default IphoneFrame



