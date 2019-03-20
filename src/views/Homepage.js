import React, { Component } from 'react';
import SeoBase from '../components/SeoBase';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <SeoBase title='Homepage' description='Homepage description'>
          <Hero />
          <WhatWeDo />
          <Clients />
          <Testimonials />
        </SeoBase>
      </React.Fragment>
    );
  }
}

export default Homepage;
