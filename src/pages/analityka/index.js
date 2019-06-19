import React, { Component } from 'react';
import SeoBase from '../../components/SeoBase';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import ContactSection from '../../components/ContactSection';
import Clients from '../../components/Clients';
import ColumnText from '../../components/ColumnText';
import Tripartite from '../../components/Tripartite';
import Banner from '../../components/Banner';
import ColumnsNote from '../../components/ColumnsNote';
import Depiction from '../../components/Depiction';
import FullImage from '../../components/FullImage';

import BaseLayout from '../../layouts/BaseLayout';

import filterIcon from '../../assets/filter.svg';
import fileIcon from '../../assets/file.svg';
import heroBg from '../../assets/filterBackground.svg';
import analyticBg from '../../assets/analytic.svg';

const header = {
  title: 'Lorem Ipsum is simply dummy text…',
  content: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  ctaLabel: 'Jesteś zainteresowany?',
  image: analyticBg,
};

const subheader = {
  title: 'Nie ma dobrej kampanii bez solidnej analityki.',
  content: `Przewagą marketingu online nad innymi gałęziami marketingu jest możliwość precyzyjnego mierzenia wyników. Dynamiczny rozwój branży reklamowej w internecie, więcej kanałów dzięki którym komunikujemy się z konsumentami, to większa ilość gromadzonych danych. Dane same w sobie nie poprawią skuteczności naszych kampanii, ale umiejętne spojrzenie na nie (analityka) pozwala wyciągnąć z nich wartość - cenne informacje!`,
};

const columnText = {
  title: 'Dlaczego warto?',
  leftParagraph: 'Analiza danych dostarcza nam informacji o zachowaniu użytkownika na stronie i o nim samym. Od zainteresowań przez urządzenia, z których korzysta, po dane demograficzne, geograficzne i wiele innych. Dzięki temu możemy dobrze poznać i jasno określić naszą grupę docelową. Niekiedy analiza danych może dostarczyć zaskakujących wniosków np. że nasz produkt, wbrew wcześniejszym założeniom, trafia najczęściej do zupełnie innej grupy docelowej niż planowaliśmy. Zastosowanie się do tych informacji i wprowadzenie potrzebnych zmian pozwoli zaoszczędzić środki, które przeznaczamy na kampanię i zwiększyć ROAS.',
  rightParagraph: 'Analityka daj nam wgląd w to, jak funkcjonuje nasza witryna, co może być problematyczne w korzystaniu z niej i wymaga poprawy. Możemy dzięki temu ułatwić klientowi zakup w naszym sklepie czy zapisanie się do newslettera i wyeliminować wszystko to, co “po naszej stronie” stanowi przeszkodę do dokonania konwersji. Analiza danych pozwala nam także dowiedzieć się, które działania przynoszą założone cele, a które mimo generowania kosztów nie dostarczają nam żadnej wartości. Dzięki niej możemy lepiej rozdysponować budżet na poszczególne kanały marketingowe analizując wpływ poszczególnych źródeł na osiągnięcie celu.',
};

const subheaderDetailed = {
  title: 'Zdobądź przewagę dzięki dokładności analizy!',
  content: `Jednym z najbardziej skutecznych sposobów na poprawę wyników naszych kampanii jest tzw. lejek konwersji (ang. Conversion's Funnel Model). Najogólniej mówiąc jest to poznanie całej drogi jaką przebył użytkownik od momentu, gdy trafił na naszą witrynę i poznał ją, aż do momentu gdy został naszym klientem.`,
};


const features = [
  {
    icon: filterIcon,
    content: `Lejek może nam pomóc zadbać o użytkowników nie tylko na etapie informowania o produkcie i sprzedaży, ale także na etapach pośrednich. Co bardzo ważne, możemy poświęcić szczególną uwagę na etapy, w których potencjalni klienci rezygnują, a więc zminimalizować niedoprowadzenie procesu sprzedaży do końca.`,
  },
  {
    icon: fileIcon,
    content: `W Yupi-There mamy niezbędną wiedzę i doświadczenie w korzystaniu z narzędzi Google Analytics i Hotjar. Dla klientów przygotowujemy obszerne raporty z uwzględnieniem np. “lejka konwersji”. Dostarczamy ważnych informacji na podstawie analizowanych danych i doradzamy jak poprawić witrynę i kampanię. Przekonaj się sam!`,
  },
];

class SMCampaign extends Component {
  render() {
    const halfLength = Math.ceil(features.length / 2);

    const leftSide = features.slice(0, halfLength);
    const rightSide = features.slice(halfLength, features.length);

    return (
      <BaseLayout>
        <SeoBase title='Kampanie social media' description='Kampanie social media'>
          <Header { ...header } />
          <Subheader { ...subheader } />
          <ColumnText { ...columnText } />
          <Subheader { ...subheaderDetailed } borderless />
          <FullImage src={ heroBg } />
          <ColumnsNote
            leftChildren={ leftSide.map((item, i) => <Depiction key={ i } { ...item } />) }
            rightChildren={ rightSide.map((item, i) => <Depiction key={ i } { ...item } />) }
            />
          <ContactSection />
        </SeoBase>
      </BaseLayout>
    );
  }
}

export default SMCampaign;
