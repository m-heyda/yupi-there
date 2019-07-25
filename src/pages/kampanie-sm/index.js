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

import BaseLayout from '../../layouts/BaseLayout';

import boardIcon from '../../assets/board.svg';
import gridIcon from '../../assets/grid.svg';
import notificationIcon from '../../assets/notification.svg';
import smBg from '../../assets/monitor.svg';

const header = {
  title: 'Twoja firma „na ustach” internautów',
  content: `
    Social media pozwolą dotrzeć Twojej reklamie i budować świadomość marki w obszarach, do których nie trafi inna reklama, nie ograniczaj się.`,
  ctaLabel: 'Jesteś zainteresowany?',
  image: smBg,
};

const columnText = {
  title: 'Dlaczego warto?',
  leftParagraph: 'Social media, na czele z Facebookiem, mają w sobie ogromny potencjał reklamowy. Możliwość docierania do użytkowników o różnych porach dnia, niezależnie od miejsca i wykonywanej przez nich czynności otwiera nowe możliwości reklamy dla Twojej firmy!<br /><br />Odpowiednio przygotowana reklama na Facebooku wyświetlana pomiędzy postami znajomych wkomponowuje się w całość przeglądanych każdego dnia aktualności. Nie oznacza to jednak, że jest przez to mniej skuteczna, wręcz przeciwnie! Reklama nienachalna, angażująca i odpowiadająca zainteresowaniom użytkownika to scenariusz na sukces! Taka właśnie powinna być reklama na Facebooku.',
  rightParagraph: 'Duże znaczenie ma możliwość budowania relacji z potencjalnymi klientami. Użytkownicy najpierw poznają naszą markę, następnie zapamiętują ją i coraz mocniej wpisuje się ona w ich świadomość. Dobrze prowadzona kampania reklamowa nie powinna być zbiorem postów, które tylko wzywają do zakupu. Dzięki zróżnicowanym wpisom, które dla użytkownika stanowią wartość i budzą pozytywne skojarzenia, możemy osiągnąć znacznie więcej niż pojedynczą sprzedaż - zbudować zaangażowaną społeczność wokół swojej marki. Musimy przede wszystkim poznać naszą grupę docelową, następnie zaplanować strategię opartą o angażujące i niosące wartość dla klienta reklamy.',
};

const subheader = {
  title: 'Jak kierujemy reklamy na Facebooku?',
  content: `Wartością reklamy na Facebooku jest możliwość bardzo precyzyjnego określenia grupy docelowej, której wyświetlimy nasze reklamy. Portale społecznościowe jak żadne inne witryny znają swoich użytkowników. Wiedzą m.in.: jaki prowadzą tryb życia, co ich pasjonuje, w jakich miejscach spędzają czas wolny, co lubią jeść, czego słuchać i jakie książki wybierają. Dzięki odpowiednim narzędziom możemy odpowiednio zawęzić grupę kierowania i docierać do osób lubiących dane fanpage’e czy interesujących się konkretnymi wydarzeniami. Oprócz tego mamy do dyspozycji kryteria geograficzne i demografię.`,
};

const features = {
    title: 'Rodzaje reklam na Facebooku',
    content: [
      {
        icon: boardIcon,
        content: `Oprócz standardowych postów sponsorowanych zawierających grafikę i treść tekstową mamy do wyboru bardziej atrakcyjne, przyciągające uwagę i angażujące formaty reklam. Jedną z takich form jest reklama karuzelowa (Zbiór grafik promujących produkt czy usługę o spójnej treści i estetyce, z możliwością “przeglądania” kolejnych zdjęć). Dobrze zaprojektowana reklama karuzelowa zaciekawi użytkownika i wywoła interakcję z kolejnymi “slajdami”.`,
      },
      {
        icon: gridIcon,
        content: `Kolejnym ciekawym rozwiązaniem są reklamy dynamiczne. Taka reklama prezentuje użytkownikowi te produkty, których zakupem może być on zainteresowany. Zaletą tego formatu jest to, że system automatycznie generuje i wyświetla reklamy na podstawie stworzonego wcześniej szablonu - pliku produktowego. Dzięki takiej reklamie dotrzesz ze swoimi produktami do osób, które wcześniej odwiedziły Twoją stronę!`,
      },
      {
        icon: notificationIcon,
        content: `Ze względu na szybki rozwój i niesłabnącą popularność aplikacji mobilnych możemy także wyświetlić naszą reklamę w Messengerze czy na Instagramie.<br /><br />
        Możliwości reklamowe w social mediach ciągle się poszerzają, warto śledzić nowinki i być na czasie. Zostaw to nam. Niepisana zasada “Nie ma Cię w social mediach, więc nie istniejesz” dotyczy dziś nie tylko życia prywatnego, ale i coraz częściej biznesu. Zdaj się na nasze doświadczenie i wiedzę - czas zaistnieć!`,
      },
    ]
};

const websiteSchema = {
  name: "Kampanie social media",
  url: "https://yupi-there.netlify.com/kampanie-sm/",
}

class SMCampaign extends Component {
  render() {
    const halfLength = Math.ceil(features.content.length / 2);

    const leftSide = features.content.slice(0, halfLength);
    const rightSide = features.content.slice(halfLength, features.content.length);

    return (
      <BaseLayout>
        <SeoBase
          title='Social Media – Skuteczne kampanie reklamowe – Yupi-There'
          description='Docieraj do potencjalnych klientów w mediach społecznościowych i poznaj moc reklamy w social media.'
          websiteSchema={ websiteSchema }
        >
          <Header { ...header } />
          <ColumnText { ...columnText } />
          <Subheader { ...subheader } />
          <ColumnsNote
            header={ features.title }
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
