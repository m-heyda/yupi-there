import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { globalSize } = variables;
const { media } = utils;

export const HeaderContent = styled.header`
  ${containerStyles};
  display: flex;
  flex-direction: column;

  padding: ${rem(30)} ${rem(globalSize.gutter)} 0;

  ${media.greaterThan('landscape')`
    flex-direction: row;
    align-items: center;
    padding: ${rem(82)} ${rem(globalSize.gutter)} 0;
  `}
`;

export const ContentWrapper = styled.div`
  text-align: left;

  ${media.greaterThan('landscape')`
    margin-right: ${rem(100)};
  `}
`;

export const ButtonWrapper = styled.div`
  max-width: ${rem(200)};
  margin: 0 auto ${rem(48)};

  ${media.greaterThan('landscape')`
    margin: 0;
  `}
`;
