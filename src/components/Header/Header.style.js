import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { globalSize } = variables;
const { media } = utils;

export const HeaderBackground = styled.header`
  background-image: linear-gradient(180deg, ${colors.white} 78%, ${colors.blackSqueeze} 100%);
`;

export const HeaderContent = styled.div`
  ${containerStyles};
  display: flex;
  flex-direction: column;

  padding: ${rem(30)} ${rem(globalSize.gutter)} 0;

  ${media.greaterThan('landscape')`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${rem(82)} ${rem(globalSize.gutter)} ${rem(32)};
  `}
`;

export const ContentWrapper = styled.div`
  text-align: left;

  ${media.greaterThan('landscape')`
    max-width: ${rem(480)};
  `}
`;

export const ButtonWrapper = styled.div`
  max-width: ${rem(200)};
  white-space: nowrap;
  margin: 0 auto ${rem(48)};

  ${media.greaterThan('landscape')`
    margin: 0;
  `}
`;
