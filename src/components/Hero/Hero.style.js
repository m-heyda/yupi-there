import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { marginSize, globalSize } = variables;
const { media } = utils;

export const HeroHeader = styled.header`
  ${containerStyles};

  padding: ${rem('30px')} ${rem(globalSize.gutter)}
    ${rem(globalSize.paddingMedium)};

  ${media.greaterThan('landscape')`
    padding: ${rem('83px')} ${rem(globalSize.gutter)} ${rem(
    globalSize.paddingLarge
  )};
  `}

  .hero-background {
    width: 100%;
    min-width: ${rem('480px')};
    max-width: ${rem('950px')};
    margin: 0 auto 0 50%;
    transform: translateX(-50%);
    overflow-x: hidden;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem('200px')};
  margin: 0 auto ${rem('48px')};

  ${media.greaterThan('tablet')`
    flex-direction: row;
    max-width: ${rem('400px')};
    margin: 0 auto ${rem('80px')};
  `}

  & > button {
    &:first-child {
      margin: 0 auto ${rem(marginSize.small)};

      ${media.greaterThan('tablet')`
        margin: 0 ${rem('20px')} 0 auto;
      `}
    }
  }
`;
