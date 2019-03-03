import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils } from '../../global/helpers';
const { globalSize } = variables;
const { media } = utils;

export const Wrapper = styled.div`
  padding: ${rem(globalSize.paddingMedium)} 0 0;
  
  ${media.greaterThan('landscape')`
    padding: ${rem(globalSize.navigationHeight)} 0 0;
  `}
`;
