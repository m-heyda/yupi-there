import styled from 'styled-components';
import { Link } from 'gatsby';
import { rem } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize, marginSize, fontSize, fontFamily } = variables;
const { media } = utils;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingSmall)} 0 ${rem(globalSize.paddingXSmall)};
`;

export const Container = styled.div`
  ${containerStyles};
`;

export const ElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('tablet')`
      flex-direction: row;
      justify-content: space-between;
    `}
`;

export const LinkElement = styled.div`
  &:not(:last-child) {
    margin: 0 0 ${rem(marginSize.medium)};
  }
`;

export const Heading = styled.p`
  margin: 0 0 ${rem(marginSize.tiny)};
  font-family: ${fontFamily.secondaryFont};
  font-size: ${rem(fontSize.smallHeading)};
  font-weight: 600;
  line-height: 1.45;
  color: ${colors.darkBlue};
`;

export const Copyright = styled.p`
  font-size: ${rem(fontSize.tiny)};
  color: ${colors.blueGrey};
`;

export const Title = styled.p`
  margin: 0 0 ${marginSize.small};
  font-size: ${fontSize.tiny};
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.riverBed};
`;
export const List = styled.ul`
  padding: 0;
  font-size: ${fontSize.small};
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin: 0 0 ${marginSize.tiny};
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const PolicyWrapper = styled.div`
  font-size: ${rem(fontSize.tiny)};

  ${StyledLink} {
    &:first-child {
      position: relative;
      margin: 0 ${rem(marginSize.medium)} 0 0;

      &:after {
        display: block;
        content: '';
        position: absolute;
        right: calc(-${rem(marginSize.medium)} / 2);
        top: 0;
        bottom: 0;
        height: 100%;
        width: 1px;
        background: ${colors.blueGrey};
      }
    }
  }
`;

export const LinkImage = styled.a`
  &:not(:last-child) {
    margin-right: ${rem(16)};
  }
`;
