import styled from 'styled-components';
import { rem } from 'polished';
import { utils, colors } from '../../global/helpers';

const { media } = utils;

export const Header = styled.h2`
  font-size: ${rem(24)};
  margin-bottom: ${rem(30)};
  color: ${colors.darkBlue};
  text-align: center;

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;
