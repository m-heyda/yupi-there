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
  background-color: ${colors.lightGreen};

  padding: ${rem(globalSize.paddingMedium)} 0;

  ${media.greaterThan('landscape')`
    padding: ${rem(globalSize.paddingLarge)} 0;
  `}
`;

export const Wrapper = styled.div`
  ${containerStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ParagraphText = styled(Paragraph)`
  text-align: center;
  margin: 0;
  max-width: ${rem(580)};
  color: ${colors.white};

  &:not(:last-child) {
    margin-bottom: ${marginSize.medium};
  }

  ${media.greaterThan('landscape')`
    font-size: ${rem(18)};

    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

export const Title = styled.h3`
  font-size: ${rem(32)};
  color: ${colors.darkBlue};
  text-align: center;
  margin-bottom: ${rem(32)};
`;
