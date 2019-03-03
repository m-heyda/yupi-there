import styled from 'styled-components';
import { rem } from 'polished';
import { variables } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { globalSize } = variables;

export const Container = styled.div`
  ${containerStyles};
`;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingSmall)} ${rem(globalSize.gutter)} 0;
`;

