import React, { Component } from 'react';
import SeoBase from '../components/SeoBase';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

import BaseLayout from '../layouts/BaseLayout';

class Homepage extends Component {
  render() {
    return (
      <BaseLayout>
        <SeoBase title='Homepage' description='Homepage description'>
          <Hero />
          <WhatWeDo />
          <Clients />
          <Testimonials />
          <ContactSection />
        </SeoBase>
      </BaseLayout>
    );
  }
}

export default Homepage;
