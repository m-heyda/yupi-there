import React, { Component } from 'react';
import SeoBase from '../../components/SeoBase';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import ContactSection from '../../components/ContactSection';
import Clients from '../../components/Clients';
import ColumnText from '../../components/ColumnText';
import AboutUs from '../../components/AboutUs';

import BaseLayout from '../../layouts/BaseLayout';

import yupiBg from '../../assets/about.svg';

const header = {
  title: 'Lorem Ipsum is simply dummy text…',
  content: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  ctaLabel: 'Jesteś zainteresowany?',
  image: yupiBg,
};

const websiteSchema = {
  name: "O nas",
  url: "https://yupi-there.netlify.com/o-nas/",
}

class About extends Component {
  render() {
    return (
      <BaseLayout>
        <SeoBase
          title='O nas'
          description='Opis strony o nas'
          websiteSchema={ websiteSchema }
        >
          <Header { ...header } />
          <AboutUs />
          <Clients withoutButton />
          <ContactSection />
        </SeoBase>
      </BaseLayout>
    );
  }
}

export default About;
