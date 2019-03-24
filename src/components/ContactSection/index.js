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
  FormError
} from './ContactSection.style';

const NAME = 'name';
const EMAIL = 'email';
const TEXT = 'text';

class ContactSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      text: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
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
            </InfoWrapper>
            <Form name="contact-form" data-netlify="true" netlify>
              <FormLabel htmlFor=''>
                <LabelName>Imię i nazwisko</LabelName>
                <FormInput
                  id={NAME}
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <FormError>Error</FormError>
              </FormLabel>
              <FormLabel htmlFor=''>
                <LabelName>Adres e-mail</LabelName>
                <FormInput
                  id={EMAIL}
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <FormError>Error</FormError>
              </FormLabel>
              <FormLabel htmlFor=''>
                <LabelName>Treść wiadomości</LabelName>
                <FormTextArea id={TEXT} >
                  {this.state.text}
                </FormTextArea>
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
