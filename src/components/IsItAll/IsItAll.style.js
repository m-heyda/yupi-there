import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles, Paragraph } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize, marginSize, transitions } = variables;
const { media } = utils;

export const ParagraphText = styled(Paragraph)`
  text-align: center;
  margin: 0;

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;

export const ParagraphHighlight = styled.p`
  color: ${colors.darkBlue};
`;

export const Header = styled.h2`
  width: 100%;
  margin-bottom: ${rem(60)};
  font-size: ${rem(32)};
  color: ${colors.darkBlue};
  text-align: center;
`;

export const TitleHighlight = styled.h3`
  color: ${colors.lightGreen};
  font-size: ${rem(32)};
  margin-top: ${rem(20)};
  text-align: center;

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;
