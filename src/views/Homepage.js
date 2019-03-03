import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import { Container } from '../global/commonStyles';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Container>
          <Hero />
        </Container>
      </React.Fragment>
    );
  }
}

export default Homepage;
