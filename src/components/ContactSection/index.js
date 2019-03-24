import React, {Component} from 'react';
import { colors } from '../../global/helpers';
import Typography from "../Typography";
import Button from "../Button";

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
      <div>
        <div>
          <Typography
            align='left'
            component='h3'
            headingVariant='heading'
            maxWidth='380px'
            textColor={colors.white}
          >
            Czekamy na Ciebie
          </Typography>
          <p>
            Sprawdź, jaki potencjał kryje Twój biznes.
            Posłuchaj, jak możemy Ci pomóc osiągnąć sukces.
          </p>
        </div>
        <div>
          <p>Masz pytania? </p>
          <div>
            <div>
              <a href="tel:+48533125600">+48 533 125 600</a>
              <a href="tel:+48533125600">+48 22 255 84 27</a>
            </div>
            <a href="mailto:biuro@yupi-there.pl">biuro@yupi-there.pl</a>
          </div>
        </div>
        <form name="contact-form" netlify>
          <label htmlFor="">
            <span>Imię i nazwisko</span>
            <input
              id={NAME}
              type="text"
              value={this.state.name}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="">
            <span>Adres e-mail</span>
            <input
              id={EMAIL}
              type="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="">
            <span>Treść wiadomości</span>
            <input type="text" value={this.state.text} onChange={this.onChange} />
          </label>
          <Button type="submit">Skontaktuj się z nami</Button>
        </form>
      </div>
    );
  }
}

export default ContactSection;