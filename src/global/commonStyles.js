import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { variables } from './helpers';

const { globalSize } = variables;

export const containerStyles = css`
  width: 100%;
  max-width: ${rem(globalSize.container)};
  padding: 0 ${rem(globalSize.gutter)};
  margin: 0 auto;
`;

export const Container = styled.div`
  ${containerStyles};
`;

export const Paragraph = styled.p`
  margin: 0 auto ${props => props.margin ? rem(props.margin) : rem('12px')};
  width: 100%;
  max-width: ${props => props.maxWidth ? rem(props.maxWidth) : '100%'};
  color: ${props => props.color};
  text-align: ${props => props.align || 'center'};
`;
