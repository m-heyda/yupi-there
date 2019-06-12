import React from 'react';

import { colors } from '../../global/helpers';

import TwoColumnsLayout from '../TwoColumnsLayout';

import {
  ParagraphText,
  ParagraphHighlight,
  Header,
  TitleHighlight,
  ContactPhone
} from './AboutUs.style';

const LeftComponent = () => (
  <div>
    <ParagraphText>
      Jesteśmy grupą doświadczonych freelancerów. Zajmujemy się szeroko pojętym marketingiem internetowym jednak corem naszych działań są kampanie AdWords, działania SEO i Analityka internetowa. W online marketingu pracujemy od kilku lat i stale poszerzamy naszą wiedzę - przychodzi nam to z łatwością, bo marketing to nasza pasja!
    </ParagraphText>
    <ContactPhone>
      <ParagraphHighlight>Skontaktuj się z nami:</ParagraphHighlight>
      <TitleHighlight>
        <a href="Tel: 000 000 000">Tel: 000 000 000</a>
      </TitleHighlight>
    </ContactPhone>
  </div>
)

const RightComponent = () => (
  <ParagraphText>
    Naszą główną wartością jest zadowolenie klienta. Chcemy dać mu dokładnie to czego potrzebuje. Oferujemy indywidualne spojrzenie na każdą firmę, z którą współpracujemy. Chcemy doradzać, wspierać i budować pozycję Twojej firmy online.
  </ParagraphText>
)

const AboutUs = () => {
  return (
    <section>
      <TwoColumnsLayout
        header={ <Header>O nas.</Header> }
        leftChildren={ <LeftComponent /> }
        rightChildren={ <RightComponent /> }
      />
    </section>
  );
};

export default AboutUs;
