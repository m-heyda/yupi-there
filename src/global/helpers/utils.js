import { css } from 'styled-components';
import { breakpoints } from './variables';

function getBreakpointValue(breakpointValue) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue)) {
    return breakpointValue;
  } else {
    console.warn('Not a valid breakpoint');
    return '0';
  }
}

export const media = {
  lessThan: breakpoint => (...args) => css`
    @media (max-width: ${getBreakpointValue(breakpoint)}) {
      ${css(...args)};
    }
  `,
  greaterThan: breakpoint => (...args) => css`
    @media (min-width: ${getBreakpointValue(breakpoint)}) {
      ${css(...args)};
    }
  `,
};

export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(#000, 0);
  }

  footer,
  header,
  main,
  nav {
    display: block;
  }

  body {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ol,
  ul {
    margin: 0;
    list-style: none;
  }

  figure {
    margin: 0;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  button {
    border-radius: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button {
    text-transform: none;
  }

  input[type='radio'],
  input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  [hidden] {
    display: none;
  }
`;

export default {
  media,
  reset,
};
