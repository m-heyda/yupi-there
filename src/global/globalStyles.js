import { createGlobalStyle } from 'styled-components';
import { colors, variables, utils } from './helpers';

export const GlobalStyles = createGlobalStyle`
  ${utils.reset};

  html,
  body {
    font-family: ${variables.fontFamily.primaryFont};
    font-weight: 400;
    background: ${colors.white};
    color: ${colors.blueGrey};
  }

  p {
    line-height: 24px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${variables.fontFamily.secondaryFont};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;
