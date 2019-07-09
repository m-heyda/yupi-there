import React from 'react';

import { colors } from '../../global/helpers';

import TwoColumnsLayout from '../TwoColumnsLayout';

import {
  ParagraphText,
  ParagraphHighlight,
  Header,
  TitleHighlight,
} from './IsItAll.style';

const LeftComponent = () => (
  <div>
    <ParagraphText>
      <ParagraphHighlight>AdWords to znacznie więcej. Ale to już pozostaw nam.</ParagraphHighlight>
      Nie jesteś pewien co będzie najkorzystniejsze dla Twojej firmy? Zadzwoń, pomożemy!
    </ParagraphText>
    <TitleHighlight>
      <a href="tel:+48505950321">Tel: 505 950 321</a>
    </TitleHighlight>
  </div>
)

const RightComponent = () => (
  <ParagraphText>
    Ze swojej strony oferujemy wysoką jakość usług,
    szeroką wiedzę i stały, błyskawiczny kontakt,
    atrakcyjne, konkurencyjne stawki za setup i prowadzenie
    kampanii. Innymi słowy wszystko czego potrzeba, aby osiągnąć
    dobre wyniki, co przełoży się później na coś,
    do czego wspólnie dążymy – Twój sukces!
  </ParagraphText>
)

const IsItAll = () => {
  return (
    <section>
      <TwoColumnsLayout
        header={ <Header>Czy to wszystko? <span style={{ color: colors.lightGreen }}>Nie!</span></Header> }
        leftChildren={ <LeftComponent /> }
        rightChildren={ <RightComponent /> }
      />
    </section>
  );
};

export default IsItAll;
