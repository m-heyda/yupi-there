import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { marginSize, globalSize } = variables;
const { media } = utils;

const HERO_GUTTER = 60;

export const HeroHeader = styled.header`
  ${containerStyles};

  padding: ${rem('30px')} ${rem(globalSize.gutter)} 0;

  ${media.greaterThan('landscape')`
    padding: ${rem('83px')} ${rem(globalSize.gutter)} 0;
  `}
`;

export const BackgroundWrapper = styled.div`
  width: calc(100% + ${rem(globalSize.gutter)});
  margin: 0 ${rem(-globalSize.gutter)};
  overflow: hidden;
`;

export const HeroBackground = styled.img`
  display: block;
  width: calc(100% + ${rem(HERO_GUTTER * 2)});
  margin: 0 ${rem(-HERO_GUTTER)};
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
