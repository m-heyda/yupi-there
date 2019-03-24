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
  FormTextArea,
  FormError,
} from './ContactSection.style';

const NAME = 'name';
const EMAIL = 'email';
const TEXT = 'message';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

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
                <ContactLink href='tel:+48533125600'>
                  +48 533 125 600
                </ContactLink>
                <ContactLink href='tel:+48533125600'>
                  +48 22 255 84 27
                </ContactLink>
              </PhoneWrapper>
              <ContactLink href='mailto:biuro@yupi-there.pl'>
                biuro@yupi-there.pl
              </ContactLink>
            </ContactWrapper>
          </QuestionsWrapper>
          <Form name='contact-form' onSubmit={this.handleSubmit}>
            <input type='hidden' name='form-name' value='netlify-contact' />
            <FormLabel htmlFor={NAME}>
              <LabelName>Imię i nazwisko</LabelName>
              <FormInput
                id={NAME}
                name={NAME}
                type='text'
                value={this.state.name}
                onChange={this.onChange}
              />
              <FormError>Error</FormError>
            </FormLabel>
            <FormLabel htmlFor={EMAIL}>
              <LabelName>Adres e-mail</LabelName>
              <FormInput
                id={EMAIL}
                name={EMAIL}
                type='email'
                value={this.state.email}
                onChange={this.onChange}
              />
              <FormError>Error</FormError>
            </FormLabel>
            <FormLabel htmlFor={TEXT}>
              <LabelName>Treść wiadomości</LabelName>
              <FormTextArea
                id={TEXT}
                name={TEXT}
                value={this.state.text}
                onChange={this.onChange}
              />
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
