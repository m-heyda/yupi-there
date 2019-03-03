import { string, func, oneOfType, oneOf, any } from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { marginSize, globalSize, breakpoints } = variables;
const { media } = utils;

export const HeroHeader = styled.header`
  ${containerStyles};

  position: relative;
  padding: ${rem('30px')} ${rem(globalSize.gutter)} ${rem('260px')};

  ${media.greaterThan(breakpoints.tablet)`
    padding: ${rem('30px')} ${rem(globalSize.gutter)} ${rem('320px')};
  `}

  ${media.greaterThan(breakpoints.landscape)`
    padding: ${rem('83px')} ${rem(globalSize.gutter)} ${rem('500px')};
  `}
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;

  & > svg {
    position: relative;
    width: 150%;
    max-width: ${rem('510px')};
    left: 50%;
    transform: translateX(-50%);

    ${media.greaterThan(breakpoints.tablet)`
      max-width: ${rem('600px')};
    `}

    ${media.greaterThan(breakpoints.landscape)`
      width: 90%;
      max-width: none;
    `}
  }
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
