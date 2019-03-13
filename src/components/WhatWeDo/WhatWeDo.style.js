import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize, marginSize, transitions } = variables;
const { media } = utils;

export const Container = styled.div`
  ${containerStyles};
`;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingSmall)} 0 0;
  border-bottom: 1px solid ${colors.athensGray};
`;

export const TilesWrapper = styled.ul`
  margin: 0;
  padding: 0;

  ${media.greaterThan('tablet')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `}

  ${media.greaterThan('landscape')`
    margin: 0 0 ${rem(32)};
  `}
`;

export const Tile = styled.li`
  position: relative;
  margin: 0 0 ${rem(marginSize.regular)};
  padding: ${rem(40)} ${rem(globalSize.gutter)};
  width: 100%;
  z-index: 1;
  user-select: none;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colors.white};
    box-shadow: 0 40px 120px 0 ${rgba(colors.blueGrey, 0.2)};
    border-radius: ${rem(6)};
    z-index: -1;

    ${media.greaterThan('landscape')`
      opacity: 0;
      transform: scale(0.9);
      transition: transform .3s ${transitions.spring}, opacity .2s ease-in;
    `}
  }

  ${media.greaterThan('tablet')`
    flex: 0 0 calc(50% - ${rem(16)});
  `}

  ${media.greaterThan('landscape')`
    flex: 0 0 calc(33% - ${rem(8)});
    
    &:hover {
      &:before {
        opacity: 1;
        transform: scale(1);
      }
    }
  `}
`;

export const TileContent = styled.div`
  position: relative;
  z-index: 2;

  ${media.greaterThan('tablet')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `}
`;

export const TileIcon = styled.div`
  display: block;
  margin: 0 auto ${rem(16)};
  width: 100%;
  max-width: ${rem(120)};

  & > svg {
    display: block;
    width: 100%;
    height: auto;
    min-height: ${rem(90)};
  }
`;
