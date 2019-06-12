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
  text-align: center;

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;

export const ContactPhone = styled.div`
  margin-top: ${rem(60)};
  text-align: center;

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;

export const Header = styled.h2`
  width: 100%;
  margin-bottom: ${rem(30)};
  font-size: ${rem(32)};
  color: ${colors.darkBlue};
  text-align: center;

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;

export const TitleHighlight = styled.h3`
  margin-top: ${rem(20)};

  a {
    color: ${colors.lightGreen};
    font-size: ${rem(32)};
    text-decoration: none;
  }
`;
