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
      <ParagraphHighlight style={{ color: 'black' }}>AdWords to znacznie więcej. Ale to już pozostaw nam.</ParagraphHighlight>
      Nie jesteś pewien co będzie najkorzystniejsze dla Twojej firmy? Zadzwoń, pomożemy!
    </ParagraphText>
    <TitleHighlight>Tel: 000 000 000</TitleHighlight>
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
