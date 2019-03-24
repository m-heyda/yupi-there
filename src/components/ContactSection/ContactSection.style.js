import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';
import Background from '../../assets/contact-bg.png';

const { globalSize, fontSize, marginSize } = variables;
const { media } = utils;

export const Container = styled.div`
  ${containerStyles};
`;

export const Wrapper = styled.section`
  padding: ${rem(globalSize.paddingSmall)} 0;
  background-image: url(${Background});
  background-size: cover;

  ${media.greaterThan('tablet')`
    padding: ${rem(globalSize.paddingMedium)} 0;
  `}
`;

export const HeadingWrapper = styled.div`
  margin: 0 0 ${rem(marginSize.medium)};
`;

export const HeadingParagraph = styled.p`
  font-size: ${rem(fontSize.small)};
  color: ${colors.regentGray};
`;

export const ContactParagraph = styled.p`
  margin: 0 0 ${rem(marginSize.tiny)};
  color: ${colors.heather};
`;

export const QuestionsWrapper = styled.div`
  margin: 0 0 ${rem(marginSize.medium)};
`;
export const ContactWrapper = styled.div`
  
`;
export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${rem(marginSize.regular)};
`;

export const ContactLink = styled.a`
  font-size: ${rem(fontSize.menu)};
  font-weight: 600;
  color: ${colors.lightGreen};
  text-decoration: none;
  
  &:first-child {
    margin: 0 0 ${rem(6)};
  }
`;

export const Form = styled.form``;
export const FormLabel = styled.label``;
export const LabelName = styled.span``;
export const FormInput = styled.input``;
export const FormTextArea = styled.textarea``;
export const FormError = styled.span``;
