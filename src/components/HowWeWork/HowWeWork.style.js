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
  align-items: center;

  ${media.greaterThan('landscape')`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingMedium)} 0 0;
  border-bottom: 1px solid ${colors.athensGray};
`;

export const ContentWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: ${rem(60)};
  }

  ${media.greaterThan('landscape')`
    max-width: ${rem(500)};
    margin-bottom: 0;
  `}
`;

export const ParagraphText = styled(Paragraph)`
  text-align: center;

  ${media.greaterThan('landscape')`
    text-align: left;
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

export const TilesWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 540px
`;

export const Tile = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${rem(54)};
  padding-right: 16px;

  ${media.greaterThan('landscape')`
    max-width: 50%;
  `}
`;

export const TileIcon = styled.img`
  margin-right: ${rem(24)};
`;
