import styled from 'styled-components';
import { rem } from 'polished';
import { variables, utils, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';
import { Paragraph } from '../../global/commonStyles';

const { globalSize } = variables;
const { media } = utils;

export const HeaderBackground = styled.header`
  background-image: linear-gradient(180deg, ${colors.white} 78%, ${colors.blackSqueeze} 100%);
`;

export const HeaderContent = styled.div`
  ${containerStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rem(30)} ${rem(globalSize.gutter)} ${rem(32)};

  ${media.greaterThan('landscape')`
    flex-direction: row;
    justify-content: space-between;
    padding: ${rem(82)} ${rem(globalSize.gutter)} ${rem(32)};
  `}
`;

export const ContentWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('landscape')`
    align-items: flex-start;
    max-width: ${rem(480)};
  `}
`;

export const Title = styled.h1`
  color: ${colors.darkBlue};
  text-align: center;
  font-size: ${rem(28)};
  margin-bottom: ${rem(16)};

  ${media.greaterThan('landscape')`
  font-size: ${rem(44)};
    text-align: left;
  `}
`;

export const ParagraphText = styled(Paragraph)`
  text-align: center;
  margin: 0;
  max-width: ${rem(580)};
  margin-bottom: ${({ margin }) => margin};

  ${media.greaterThan('landscape')`
    font-size: ${rem(18)};
    text-align: left;
  `}
`;


export const ButtonWrapper = styled.div`
  max-width: ${rem(200)};
  white-space: nowrap;
  margin: 0 auto ${rem(48)};

  ${media.greaterThan('landscape')`
    margin: 0;
  `}
`;

export const Image = styled.img`
  height: auto;
  max-width: ${rem(540)};
`;
