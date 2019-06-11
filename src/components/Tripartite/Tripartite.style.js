import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles, Paragraph } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize, marginSize, transitions } = variables;
const { media } = utils;

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('landscape')`
    align-items: flex-start;
    flex-direction: row;
  `}
`;

export const ParagraphText = styled(Paragraph)`
  text-align: center;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: ${marginSize.medium};
  }

  ${media.greaterThan('landscape')`
    text-align: left;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

export const Image = styled.img`
  margin-right: ${rem(24)};
`;

export const Title = styled.h3`
  font-size: ${rem(24)};
  color: ${colors.darkBlue};
  text-align: center;

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${rem(38)};

  ${media.greaterThan('landscape')`
    justify-content: flex-start;
  `}
`;
