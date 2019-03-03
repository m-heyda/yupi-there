import React, { Component } from 'react';
import SeoBase from '../components/SeoBase';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <SeoBase>
          <Hero />
          <WhatWeDo />
        </SeoBase>
      </React.Fragment>
    );
  }
}

export default Homepage;
