import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { marginSize, globalSize } = variables;
const { media } = utils;

export const Container = styled.div`
  ${containerStyles}
`;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingSmall)} 0;
  border-bottom: 1px solid ${colors.athensGray};
`;
