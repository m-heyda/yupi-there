import { string, func, oneOfType, oneOf, any } from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { rem, rgba } from 'polished';
import { variables, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { fontSize, fontFamily, marginSize, globalSize } = variables;

export const HeroHeader = styled.header`
  ${containerStyles};
  
    padding: ${rem(globalSize.paddingSmall)} ${rem(globalSize.gutter)} 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
