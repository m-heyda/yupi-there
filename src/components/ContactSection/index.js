import React, { Component } from 'react';
import { colors } from '../../global/helpers';
import Typography from '../Typography';
import Button from '../Button';
import {
  Wrapper,
  Container,
  ContentWrapper,
  InfoWrapper,
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
    // https://nodemailer.com/about/
    // https://blog.elpassion.com/jam-stack-your-old-cms-into-the-closet-12cad2c7b1b3?fbclid=IwAR0_GxXe9iKUu55spACclLMzuwhAs2_cXJmWv_7iqIJtiLo1dIe-n50EPWQ
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <ContentWrapper>
            <InfoWrapper>
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
                  Sprawdź, jaki potencjał kryje Twój biznes. Posłuchaj, jak
                  możemy Ci pomóc osiągnąć sukces.
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
            </InfoWrapper>
            <Form
              onSubmit={this.handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
            >
              <input name='form-name' value='contact' hidden />
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
          </ContentWrapper>
        </Container>
      </Wrapper>
    );
  }
}

export default ContactSection;
