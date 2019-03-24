import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';
import { variables, utils } from '../../global/helpers';
import Background from '../../assets/contact-bg.png';

const { globalSize, fontSize, marginSize, transitions } = variables;
const { media } = utils;

const inputStyles = css`
  background: ${colors.fiord};
  border: 1px solid transparent;
  border-radius: ${rem(22)};
  font-family: inherit;
  font-size: ${fontSize.menu};
  color: ${colors.white};
  transition: border 0.2s ${transitions.spring};

  &:focus,
  &:active {
    border: 1px solid ${colors.blueGrey};
    outline: none;
  }

  &.error {
    border: 1px solid ${colors.radicalRed};
  }
`;

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

export const ContentWrapper = styled.div`
  ${media.greaterThan('tablet')`
    display: flex;
    justify-content: space-between;
  `}
`;

export const InfoWrapper = styled.div`
  ${media.greaterThan('tablet')`
    margin: 0 ${rem(marginSize.regular)} 0 0;
    max-width: ${rem(346)};
  `}
  
  ${media.greaterThan('landscape')`
    margin: 0;
  `}
`;

export const HeadingWrapper = styled.div`
  margin: 0 0 ${rem(marginSize.medium)};
  line-height: 1.4;

  ${media.greaterThan('landscape')`
    margin: 0 0 ${rem(50)};
    line-height: 1.6;
  `}
`;

export const HeadingParagraph = styled.p`
  font-size: ${rem(fontSize.small)};
  color: ${colors.regentGray};

  ${media.greaterThan('landscape')`
    font-size: ${fontSize.regular};
  `}
`;

export const ContactParagraph = styled.p`
  margin: 0 0 ${rem(marginSize.tiny)};
  font-size: ${rem(fontSize.regular)};
  color: ${colors.heather};

  ${media.greaterThan('landscape')`
    color: ${colors.regentGray};
  `}
`;

export const QuestionsWrapper = styled.div`
  margin: 0 0 ${rem(marginSize.medium)};

  ${media.greaterThan('tablet')`
    margin: 0;
  `}
`;
export const ContactWrapper = styled.div`
  ${media.greaterThan('landscape')`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
  `}
`;
export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 ${rem(marginSize.medium)};

  ${media.greaterThan('landscape')`
    margin: 0;
  `}
`;

export const ContactLink = styled.a`
  font-size: ${rem(fontSize.menu)};
  font-weight: 600;
  color: ${colors.lightGreen};
  text-decoration: none;
  transition: color .3s ${transitions.spring};
  
  &:hover {
    color: ${colors.greenHaze};
  }

  &:first-child {
    margin: 0 0 ${rem(marginSize.tiny)};
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: ${rem(468)};

  ${media.greaterThan('tablet')`
    max-width: ${rem(420)};
  `}
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${rem(marginSize.small)};
  
  &:last-of-type {
    margin: 0 0 ${rem(marginSize.regular)};
  }
`;
export const LabelName = styled.span`
  margin: 0 0 ${rem(6)};
  font-size: ${rem(15)};
`;
export const FormInput = styled.input`
  padding: 0 ${rem(22)};
  height: ${rem(44)};
  ${inputStyles}
`;
export const FormTextArea = styled.textarea`
  padding: ${rem(10)} ${rem(22)};
  height: ${rem(112)};
  resize: none;
  ${inputStyles}

  ${media.greaterThan('mobile')`
    height: ${rem(160)};
  `}
`;
export const FormError = styled.span`
  display: none;
  padding: ${rem(4)} 0 0;
  color: ${colors.radicalRed};
  font-size: ${fontSize.tiny};
`;
