import { createGlobalStyle } from 'styled-components';
import { colors, variables, utils } from './helpers';

export const GlobalStyles = createGlobalStyle` 
  ${utils.reset};
  
  html,
  body {
    font-family: ${variables.fontFamilies.primaryFont};
    font-size: 100%;
    font-weight: 400;
    background: ${colors.white};
    color: ${colors.blueGrey};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
