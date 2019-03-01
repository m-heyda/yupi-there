import { css } from 'styled-components';
import { breakpoints } from './variables';

function getBreakpointValue(breakpointValue, unit = 'px') {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue] + unit;
  } else if (parseInt(breakpointValue)) {
    return breakpointValue + unit;
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

export default {
  media,
};
