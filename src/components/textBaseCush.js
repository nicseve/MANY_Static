import * as typographyStyles from "../styles/typography";
import React from "react";
import styled from 'styled-components';

//TODO: Import fonts and make size a prop.
const TextBaseCush = styled.text`
{
  font-size: 24px;
  font-weight: bold;
  font-family: ITC Cushing Std;
  color: black;
  justify-content: center;  
}
`

export default TextBaseCush
// <text style={typographyStyles.cushingTextBase}>Sign In</text>
