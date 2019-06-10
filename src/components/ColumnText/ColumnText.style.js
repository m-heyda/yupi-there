import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles, Paragraph } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize, marginSize, transitions } = variables;
const { media } = utils;

export const Container = styled.div`
  ${containerStyles};
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingMedium)} 0;
  border-bottom: 1px solid ${colors.athensGray};

  ${media.greaterThan('landscape')`
    padding: ${rem(globalSize.paddingLarge)} 0;
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

export const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('landscape')`
    flex-direction: row;
  `}
`;

export const Header = styled.h3`
  font-size: ${rem(24)};
  color: ${colors.darkBlue};
  margin-bottom: ${props => (props.marginBottom && rem(props.marginBottom))};
  text-align: center;

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;
