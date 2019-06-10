import React, { Component } from 'react';
import SeoBase from '../../components/SeoBase';
import Header from '../../components/Header';
import HowWeWork from '../../components/HowWeWork';
import Clients from '../../components/Clients';
import Testimonials from '../../components/Testimonials';
import ContactSection from '../../components/ContactSection';

import BaseLayout from '../../layouts/BaseLayout';

const clients = [
  {
    author: 'Toyota Bielany',
    content: `Współpracę z Yupi-There oceniam na 5+. Nasze kampanie notują wzrost
    wyników każdego kolejnego miesiąca. Duży plus za zaangażowanie,
    super podejście i kreatywność w działaniach.`,
  },
  {
    author: 'Centrum Terapii UK',
    content: `Zdecydowanie polecam Yupi-There. Duża odległość i kontakt jedynie
    telefoniczny nie stanowi żadnego problemu. W razie wątpliwości mogę
    liczyć na błyskawiczną odpowiedź i pomoc. Doceniam za terminowość,
    solidność i mnóstwo pomysłów.`,
  },
];

const header = {
  title: 'Kampanie reklamowe w social mediach',
  content: `
    Zadbamy o pozycjonowanie i użyteczność twojego serwisu
    internetowego. Budujemy wzrost i zwiększamy sprzedaż dla e-
    commerce, startupów i firm B2B.`,
  ctaLabel: 'Skontaktuj się',
}

class SMCampaign extends Component {
  render() {
    return (
      <BaseLayout>
        <SeoBase title='Kampanie social media' description='Kampanie social media'>
          <Header { ...header } />
          <HowWeWork />
          <Clients />
          <Testimonials clients={ clients } />
          <ContactSection />
        </SeoBase>
      </BaseLayout>
    );
  }
}

export default SMCampaign;
