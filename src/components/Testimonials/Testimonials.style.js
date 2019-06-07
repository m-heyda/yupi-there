import styled from 'styled-components';
import { rem } from 'polished';
import QuoteIcon from '../Icons/QuoteIcon';
import { colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize } = variables;
const { media } = utils;

export const Background = styled.img`
  display: none;
  position: absolute;
  left: -110px;
  top: rem(globalSize.paddingSmall);
  max-height: 810px;
  width: 115%;

  ${media.greaterThan('desktop')`
    display: block;
  `}
`;

export const Container = styled.div`
  ${containerStyles};
`;

export const Wrapper = styled.section`
  overflow: hidden;
  position: relative;
  padding: ${rem(globalSize.paddingSmall)} 0;
  border-bottom: 1px solid ${colors.athensGray};

  ${media.greaterThan('tablet')`
    padding: ${rem(globalSize.paddingMedium)} 0;
  `}
`;

export const TestimonialsWrapper = styled.div`
  margin: ${rem(40)} -${rem(globalSize.gutter)};

  ${media.greaterThan('tablet')`
    padding: 0;
  `}

  ${media.greaterThan('desktop')`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `}
`;

export const TestimonialBox = styled.div`
  margin-bottom: ${rem('24px')};
  padding: ${rem(40)} ${rem(globalSize.gutter)};
  background: ${colors.titanWhite};
  border: 1px solid ${colors.athensGray};
  border-radius: ${rem(6)};
  z-index: 1;

  ${media.greaterThan('desktop')`
    flex: 0 0 49%;
    max-width: 49%;
    padding: ${rem(40)};

    &:nth-child(even) {
      transform: translateY(-40%);
    }
  `}
`;

export const TestimonialIcon = styled(QuoteIcon)`
  display: block;
  margin: 0 0 ${rem(22)};

  ${media.greaterThan('desktop')`
    margin: 0 0 ${rem(32)};
  `}
`;

export const TestimonialContent = styled.p`
  margin: 0 0 ${rem(24)};
  font-style: italic;
  font-weight: 300;
`;

export const TestimonialAuthor = styled.p`
  color: ${colors.darkBlue};
`;
