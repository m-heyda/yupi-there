import styled from 'styled-components';
import { rem } from 'polished';
import { variables } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { globalSize } = variables;

export const HeroHeader = styled.header`
  ${containerStyles};
  
    padding: ${rem(globalSize.paddingSmall)} ${rem(globalSize.gutter)} 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem('200px')};
  margin: 0 auto;
  
  & > button {
    &:first-child {
      margin: 0 auto 120px;
    }
  }
`;
