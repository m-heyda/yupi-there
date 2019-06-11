import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles, Paragraph } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize, marginSize, transitions } = variables;
const { media } = utils;

export const Container = styled.div`
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
  margin-bottom: ${rem(24)};

  ${media.greaterThan('landscape')`
    margin-right: ${rem(24)};
    margin-bottom: 0;
  `}
`;
