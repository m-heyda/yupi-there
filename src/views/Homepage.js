import React, { Component } from 'react';
import SeoBase from '../components/SeoBase';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <SeoBase title='Homepage' description='Homepage description'>
          <Hero />
          <WhatWeDo />
          <Clients />
          <Testimonials />
          <ContactSection />
          <Footer />
        </SeoBase>
      </React.Fragment>
    );
  }
}

export default Homepage;
