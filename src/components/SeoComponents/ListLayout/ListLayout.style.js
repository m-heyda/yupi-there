import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../../global/helpers';
import { containerStyles } from '../../../global/commonStyles';
import { variables, utils } from '../../../global/helpers';

const { globalSize, marginSize, transitions } = variables;
const { media } = utils;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${rem(globalSize.paddingXSmall)} 0;
  border-bottom: 1px solid ${colors.athensGray};

  ${media.greaterThan('landscape')`
    padding: ${rem(globalSize.paddingSmall)} 0;
  `}
`;

export const Wrapper = styled.div`
  ${containerStyles};
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 64px;
  }
`;
