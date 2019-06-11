import React, { Component } from 'react';
import SeoBase from '../../components/SeoBase';
import Header from '../../components/Header';
import ContactSection from '../../components/ContactSection';
import Clients from '../../components/Clients';
import ColumnText from '../../components/ColumnText';
import TwoColumnsLayout from '../../components/TwoColumnsLayout';
import FeatureItem from '../../components/FeatureItem';
import IsItAll from '../../components/IsItAll';

import BaseLayout from '../../layouts/BaseLayout';

import magnifyHouseIcon from '../../assets/magnify-house.svg';
import signIcon from '../../assets/sign.svg';
import boxIcon from '../../assets/box.svg';
import diodeIcon from '../../assets/diode.svg';

const header = {
  title: 'Nie zostawaj w tyle, zacznij od Google Ads',
  content: `
    Twój sukces zaczyna się w chwili kiedy zostajesz zauważony,
    nie pozwól, żeby konkurencja uniemożliwiła Ci docieranie
    do potencjalnych klientów, z Ads to możliwe`,
  ctaLabel: 'Jesteś zainteresowany?',
}

const features = [
  {
    icon: magnifyHouseIcon,
    title: `Reklama w sieci wyszukiwania`,
    subtitle: `Linki Sponsorowane:`,
    introduction: `Dziś wszyscy czegoś szukają – Aby odnieść sukces wystarczy pojawić się w odpowiednim miejscu i czasie. Dzięki nam będziesz dokładnie tam gdzie Twoi potencjalni klienci.`,
    howItWorksTitle: `Jak to działa?`,
    howItWorksContent: `Kierujemy specjalnie przygotowane reklamy na wskazane słowa kluczowe i pojawiamy się tam, gdzie użytkownik szuka czegoś, co Ty możesz mu zaoferować. Wieloletnie doświadczenie i znajomość działań optymalizacyjnych pozwala bardzo precyzyjnie trafiać do pożądanych odbiorców.`,
  },
  {
    icon: signIcon,
    title: `Reklama w sieci reklamowej`,
    subtitle: `Google Display Network:`,
    introduction: `Chcesz zwiększyć popularność swojej marki, pojawiać się na tysiącach różnych witryn dzięki zasięgowemu działaniu, a może dotrzeć do użytkowników, którzy mieli już styczność z Twoją firmą? Kampanie GDN pozwalają niewielkim kosztem wygenerować ogromny zasięg i przyciągać w atrakcyjny sposób większą liczbę użytkowników. Jest to świetne uzupełnienie innych typów kampanii.`,
    howItWorksTitle: `Jak to działa?`,
    howItWorksContent: `Przygotowane reklamy graficzne, elastyczne lub tekstowe kierujemy do witryn znajdujących się w sieci reklamowej Google (Google Display Network). Ta ogromna, licząca ponad 2 miliony witryn sieć dociera do ponad 90% użytkowników Internetu! Kryteriami kierowania reklam mogą być m. in. demografia, geografia, tematy i zainteresowania czy wskazane słowa kluczowe.`,
  },
  {
    icon: boxIcon,
    title: `Reklama produktowa`,
    subtitle: `PLA:`,
    introduction: `Prowadząc sklep internetowy wykorzystaj możliwości, jakie daje reklama produktowa. Zdjęcie Twojego produktu, tytuł oraz cena skutecznie zachęcą użytkownika do zakupów w Twoim sklepie. O skuteczności kampanii PLA świadczy fakt, że wielu sprzedawców odnotowuje dwu-, a nawet trzykrotne zwiększenie współczynnika klikalności (CTR) po dodaniu reklam produktowych.`,
    howItWorksTitle: `Jak to działa?`,
    howItWorksContent: `Reklamy PLA są tworzone na podstawie informacji o produkcie zawartych w pliku danych w Merchant Center. Twoje reklamy mogą wyświetlać się w wyszukiwarce, zakupach google a także w sieci partnerów wyszukiwania.`,
  },
  {
    icon: diodeIcon,
    title: `Reklama Video`,
    subtitle: ``,
    introduction: `Jeśli tekst i obraz tak dobrze sprawdzają się jako narzędzia reklamy, pomyśl jak skuteczne i angażujące może ich połączenie  z dźwiękiem i reklamowanie się za pomocą filmu video. Reklama wideo pozwala znacznie zwiększyć świadomość marki, a także zdecydowanie mocniej zaangażować użytkownika.`,
    howItWorksTitle: `Jak to działa?`,
    howItWorksContent: `Twój film może być wyświetlany zarówno w YouTube jak i we wspomnianej wcześniej sieci reklamowej. Kierowanie odbywa się podobnie jak w sieci GDN – wybieramy użytkowników, którzy mają zobaczyć Twój film na podstawie ich wieku, lokalizacji, tego czym się interesują i co lubią`,
  },
];

const columnText = {
  title: 'Dlaczego Google Ads?',
  leftParagraph: 'Wyobraź sobie następującą sytuację… Znalazłeś szybki i efektywny sposób na wypromowanie swojej firmy. W przemyślany sposób kierujesz swoje reklamy na wybranych użytkowników i sam decydujesz, ile chcesz poświęcić budżetu na to. Płacisz tylko kiedy Twoja reklama przyniesie zamierzony rezultat.  ',
  rightParagraph: 'Docierasz do użytkowników w domu, w drodze do pracy, na wakacjach - wszędzie tam gdzie korzystają z komputera, smartfonu lub tabletu. Dodatkowo znasz dokładne dane i wpływ każdego pojedynczego działania na ostateczny wynik. Brzmi dobrze…? Tak właśnie wygląda skutecznie prowadzona kampania AdWords!',
}

class SMCampaign extends Component {
  render() {
    const halfLength = Math.ceil(features.length / 2);

    const leftSide = features.slice(0, halfLength);
    const rightSide = features.slice(halfLength, features.length);

    return (
      <BaseLayout>
        <SeoBase title='Kampanie social media' description='Kampanie social media'>
          <Header { ...header } />
          <ColumnText { ...columnText } />

          <Clients />
          <section>
            <TwoColumnsLayout
              leftChildren={ leftSide.map(item => <FeatureItem key={item.title} { ...item }/> ) }
              rightChildren={ rightSide.map(item => <FeatureItem key={item.title} { ...item }/> ) }
              />
          </section>
          <IsItAll />
          <ContactSection />
        </SeoBase>
      </BaseLayout>
    );
  }
}

export default SMCampaign;
