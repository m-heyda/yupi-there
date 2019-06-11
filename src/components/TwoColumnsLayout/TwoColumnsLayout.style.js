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

  padding: ${rem(globalSize.paddingMedium)} 0;
  border-bottom: 1px solid ${colors.athensGray};

  ${media.greaterThan('landscape')`
    padding: ${rem(globalSize.paddingLarge)} 0;
  `}
`;

export const Wrapper = styled.div`
  ${containerStyles};
  display: flex;
  flex-direction: column;

  ${media.greaterThan('landscape')`
    flex-direction: row;
  `}
`;

export const WrapperColumn = styled(Wrapper)`
  margin-top: ${rem(84)};

  ${media.greaterThan('landscape')`
    flex-direction: column;
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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;

  & > * {
    margin-bottom: ${rem(60)};
  }

  &:last-child > *:last-child {
    margin-bottom: 0;
  }

  &:not(:last-child) > *:only-child {
    margin-bottom: ${rem(60)};
  }

  &:not(:last-child) {
    margin-right: 0;
  }

  ${media.greaterThan('landscape')`
    &:not(:last-child) {
      margin-right: ${rem(120)};
    }
  `}
`;
