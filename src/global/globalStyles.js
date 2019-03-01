import reset from 'styled-reset';

import { createGlobalStyle } from 'styled-components';
import { colors, variables } from './helpers';

export const GlobalStyles = createGlobalStyle`
  ${reset};
  
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
