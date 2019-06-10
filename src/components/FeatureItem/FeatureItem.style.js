import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles, Paragraph } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';

const { globalSize, marginSize, transitions } = variables;
const { media } = utils;

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

export const FeatureElement = styled.div``;
export const FeatureItemHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rem(30)};
  justify-content: center;

  ${media.greaterThan('landscape')`
    justify-content: flex-start;
  `}
`;
export const FeatureItemHeaderContent = styled.div`
`;
export const FeatureItemIcon = styled.img`
  margin-right: ${rem(20)}
`;
export const FeatureItemTitle = styled.h3`
  font-size: ${rem(24)};
  color: ${colors.darkBlue};
`;
export const FeatureItemSubtitle = styled.h5`
  font-size: ${rem(18)};
  color: ${colors.darkBlue};
`;
export const FeatureItemHeading = styled.h4`
  font-size: ${rem(20)};
  color: ${colors.darkBlue};
  text-align: center;
  margin-top: ${rem(40)};
  margin-bottom: ${rem(16)};

  ${media.greaterThan('landscape')`
    text-align: left;
  `}
`;
