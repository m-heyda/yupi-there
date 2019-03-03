import React, { Component } from 'react';
import Hero from '../components/Hero';
import SeoBase from '../components/SeoBase';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <SeoBase>
          <Hero />
        </SeoBase>
      </React.Fragment>
    );
  }
}

export default Homepage;
