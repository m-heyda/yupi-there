import React, { Component } from 'react';
import { colors } from '../../global/helpers';
import Typography from '../Typography';
import Button from '../Button';
import {
  Wrapper,
  Container,
  HeadingWrapper,
  HeadingParagraph,
  ContactParagraph,
  QuestionsWrapper,
  ContactWrapper,
  PhoneWrapper,
  ContactLink,
  Form,
  FormLabel,
  LabelName,
  FormInput,
  FormError
} from './ContactSection.style';

class ContactSection extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <HeadingWrapper>
            <Typography
              align='left'
              component='h3'
              headingVariant='heading'
              textColor={colors.white}
            >
              Czekamy na Ciebie
            </Typography>
            <HeadingParagraph>
              Sprawdź, jaki potencjał kryje Twój biznes. Posłuchaj, jak możemy
              Ci pomóc osiągnąć sukces.
            </HeadingParagraph>
          </HeadingWrapper>
          <QuestionsWrapper>
            <ContactParagraph>Masz pytania?</ContactParagraph>
            <ContactWrapper>
              <PhoneWrapper>
                <ContactLink href='tel:+48533125600'>+48 533 125 600</ContactLink>
                <ContactLink href='tel:+48533125600'>+48 22 255 84 27</ContactLink>
              </PhoneWrapper>
              <ContactLink href='mailto:biuro@yupi-there.pl'>biuro@yupi-there.pl</ContactLink>
            </ContactWrapper>
          </QuestionsWrapper>
          <Form name="contact-form" data-netlify="true" netlify>
            <FormLabel htmlFor=''>
              <LabelName>Imię i nazwisko</LabelName>
              <FormInput type='text' value='' />
              <FormError>Error</FormError>
            </FormLabel>
            <FormLabel htmlFor=''>
              <LabelName>Adres e-mail</LabelName>
              <FormInput type='text' value='' />
              <FormError>Error</FormError>
            </FormLabel>
            <FormLabel htmlFor=''>
              <LabelName>Treść wiadomości</LabelName>
              <FormInput type='text' value='' />
              <FormError>Error</FormError>
            </FormLabel>
            <Button type='submit'>Skontaktuj się z nami</Button>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default ContactSection;
