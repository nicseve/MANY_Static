import {Grid} from "@material-ui/core";
import styled from 'styled-components';

// This page grid is fixed to mimic the iphone frame's screen.
const PageGrid = styled(Grid)`
  max-width: 297px;
  min-height: 533px;
  margin: auto;
  background-color: whitesmoke;
  z-index: 1;
`;

export default PageGrid
