import { string, func, oneOfType, oneOf, any } from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { rem, rgba } from 'polished';
import { variables, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { fontSize, fontFamily, marginSize, globalSize } = variables;

export const HeroHeader = styled.header`
  ${containerStyles}
  
`;
