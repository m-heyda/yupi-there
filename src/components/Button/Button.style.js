import styled, { keyframes } from 'styled-components';
import { rem, rgba } from 'polished';
import { Link } from 'react-router-dom';
import { variables, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { globalSize, transitions, fontSize } = variables;

export const YupiButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: auto;
  
  .button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${rem('36px')};
    width: 100%;
    height: ${rem(globalSize.inputHeight)};
    color: ${colors.white};
    font-size: ${rem(fontSize.menu)};
    font-weight: 500;
    background: ${colors.lightGreen};
    border: 2px solid ${colors.lightGreen};
    border-radius: ${rem('24px')};
    box-shadow: 0 10px 20px 0 ${rgba(colors.lightGreen, .2)};
    
    &.is-secondary {
      color: ${colors.lightGreen};
      background: transparent;
      border: 2px solid ${colors.lightGreen};
    }
  }
`;

export const InnerButton = styled.span`
  line-height: 1;
`;