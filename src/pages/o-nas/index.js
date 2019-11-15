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
  title: 'Yupi-there - kim jesteśmy?',
  content: `
    Specjalizujemy się w marketingu internetowym wykorzystując takie kanały dotarcia jak Google Ads, Facebook Ads, SEO, Content Marketing. Oferujemy elastyczne podejście do potrzeb klienta dostosowane do możliwości finansowych.`,
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
          title='O Nas – Yupi-There – Twoi Specjaliści marketingu online'
          description='Jesteśmy pasjonatami, każdy projekt traktujemy indywidualnie, każde wyzwanie jest dla nas przygodą.'
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
