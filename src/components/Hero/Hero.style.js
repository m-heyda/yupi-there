import { string, func, oneOfType, oneOf, any } from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { rem, rgba } from 'polished';
import { variables, utils } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { fontSize, fontFamily, marginSize, globalSize, breakpoints } = variables;
const { media } = utils;

export const HeroHeader = styled.header`
  ${containerStyles};
  
  padding: ${rem('30px')} ${rem(globalSize.gutter)} 0;
  
  ${media.greaterThan(breakpoints.landscape)`
    padding: ${rem('83px')} ${rem(globalSize.gutter)} 0;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem('200px')};
  margin: 0 auto;
  
  ${media.greaterThan(breakpoints.tablet)`
    flex-direction: row;
    max-width: ${rem('400px')};
  `}
  
  & > button {
    &:first-child { 
      margin: 0 auto ${rem(marginSize.small)};
      
      ${media.greaterThan(breakpoints.tablet)`
        margin: 0 ${rem('20px')} 0 auto;
      `}
    }
  }
`;
