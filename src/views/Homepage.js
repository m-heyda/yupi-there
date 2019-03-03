import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SeoBase from '../components/SeoBase';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <SeoBase>
          <Hero />
        </SeoBase>
      </React.Fragment>
    );
  }
}

export default Homepage;
