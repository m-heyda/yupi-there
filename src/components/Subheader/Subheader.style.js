import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles, Paragraph } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize, marginSize, transitions } = variables;
const { media } = utils;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingXSmall)} 0;
  border-bottom: ${({ borderless }) => !borderless && `1px solid ${colors.athensGray}`};

  ${media.greaterThan('landscape')`
    padding: ${rem(globalSize.paddingSmall)} 0;
  `}
`;

export const Container = styled.div`
  ${containerStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ParagraphText = styled(Paragraph)`
  text-align: center;
  margin: 0;
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

export const Header = styled.h2`
  font-size: ${rem(32)};
  color: ${colors.darkBlue};
  margin-bottom: ${props => (props.marginBottom && rem(props.marginBottom))};
  text-align: center;
`;
