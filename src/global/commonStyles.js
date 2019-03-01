import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { variables } from './helpers';

const { globalSize } = variables;

export const containerStyles = css`
  width: 100%;
  max-width: ${rem(globalSize.container)};
  padding: 0 ${rem(globalSize.gutter)};
`;

export const Container = styled.div`
  ${containerStyles};
`;
