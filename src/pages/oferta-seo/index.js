import React, { Component } from 'react';
import SeoBase from '../../components/SeoBase';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import ContactSection from '../../components/ContactSection';
import Clients from '../../components/Clients';
import ColumnText from '../../components/ColumnText';
import TwoColumnsLayout from '../../components/TwoColumnsLayout';
import Depiction from '../../components/Depiction';
import Tripartite from '../../components/Tripartite';
import Banner from '../../components/Banner';

import { Paragraph } from '../../global/commonStyles';
import BaseLayout from '../../layouts/BaseLayout';

import chartIcon from '../../assets/chart.svg';
import toolsIcon from '../../assets/tools.svg';
import thumbIcon from '../../assets/thumb.svg';
import documentIcon from '../../assets/document.svg';
import arrowIcon from '../../assets/arrow.svg';
import repeatIcon from '../../assets/repeat.svg';

import calendarIcon from '../../assets/calendar.svg';
import podiumIcon from '../../assets/podium.svg';
import cardIcon from '../../assets/card.svg';

const header = {
  title: 'Dlaczego SEO jest dla Ciebie takie ważne?',
  content: `
    Tak długo jak nie jesteś widoczny w internecie
    Twoja marka nie może wykorzystać
    swojego potencjału. Rynek internetowy
    jest już największym potencjalnym źródłem klientów i wciąż rośnie`,
  ctaLabel: 'Jesteś zainteresowany?',
};

const columnText = {
  title: 'Czym jest SEO?',
  leftParagraph: `
    SEO czyli Search Engine Optimization, lub potocznie pozycjonowanie,
    to działania sprawiający by Twoja strona internetowa była możliwie
    jak najbardziej przyjaznej wyszukiwarkom. Zwyczajowo jako SEO
    rozumie się proces optymalizacji strony internetowej, a poprzez
    pozycjonowanie proces pozyskiwania linków do niej prowadzących.
    Przez lata istnienia Google oraz innych wyszukiwarek specjaliści SEO
    znajdywali i stosowali metody mogące poprawić pozycję w rankingu.
    Wraz z ewolucją Google ewoluowały techniki.`,
  rightParagraph: `
    Dawniej stosowano słowa kluczowe w jak największej liczbie oraz
    pozyskiwano tysiące odnośników z witryn zewnętrznych. Dzisiaj
    działania polegają bardziej na m.in. optymalizacji pod kątem urządzeń
    mobilnych i szeroko zakrojonym content marketingu. Podstawa działań
    pozostaje w gruncie rzeczy jednak taka sama, jest to praca nad serwisem,
    aby Google mógł poprawnie odczytać całą jego zawartość i skojarzyć
    z wybranymi przez nas słowami oraz budowanie autorytetu poprzez
    zdobywanie wartościowych linków na stronach zewnętrznych.`,
};

const subheader = {
  title: 'Dlaczego warto zająć się SEO i pozycjonowaniem? ',
  content: `
    Ruch organiczny z wyszukiwarki jest najczęściej jednym z głównych
    źródeł wizyt na stronie. Ma tą wspaniałą właściwość, że nie trzeba za niego
    płacić - jest darmowy, a dodatkowo niezwykle wartościowy.
    Wizyty z wyszukiwarki wykazują zwykle najlepsze wyniki jeżeli chodzi
    o zaangażowanie użytkowników (długi czas trwania wizyty, niski współczynnik
    odrzuceń czyli bounce rate oraz znaczne przełożenie na konwersję
    lub sprzedaż). Dodatkowo, nawet wynajmując agencję SEO na pewien
    okres, uzyskane wyniki powinny utrzymywać się jeszcze przez dłuższy
    czas po zakończeniu współpracy. Pytanie należałoby więc odwrócić i zapytać
    dlaczego nie szukać sposobów, aby tak wartościowy kanał przynosił jak najwięcej ruchu?`,
};

const features = [
  {
    icon: chartIcon,
    content: `Każde podejście do działań pozycjonerskich powinno rozpocząć się od analizy Twojego serwisu pod kątem technicznym. Specjaliści są w stanie ocenić czy zastosowane na niej mechanizmy spełniają wytyczne Google oraz wskazać sposoby na naprawę potencjalnych błędów. Ten etap jest zazwyczaj realizowany poprzez stworzenie SEO audytu technicznego, w którym przedstawiane są gotowe rekomendacje modyfikacji serwisu. `,
  },
  {
    icon: toolsIcon,
    content: `Drugi etap to wdrożenie zmian wynikających z analizy. Jest to zazwyczaj najtrudniejszy moment zarówno dla klienta jak i agencji. Niestety wiele stron jest budowanych wyłącznie pod kątem estetyki z pominięciem aspektów wymaganych przez wyszukiwarki. Uwzględnienie tych aspektów kosztuje czas, zaangażowanie oraz pieniądze, przez co SEO jest często traktowane powierzchownie lub całkowicie pomijane na etapie budowy nowej strony. W skrajnych wypadkach uniemożliwia to modyfikacje i prowadzi nawet do konieczności stworzenia wszystkiego od podstaw jeżeli myślimy na poważnie o podboju Google. Dobra wiadomość jest jednak taka, że przypadki te występują niezwykle rzadko oraz nie trzeba mieć serwisu zbudowanego idealnie pod każdym kątem, aby pojawiać się wysoko. Strona musi być jednak możliwa do odczytu przez wyszukiwarki, aby w ogóle można było myśleć o zdobywaniu wysokich pozycji. `,
  },
  {
    icon: thumbIcon,
    content: `Skoro posiadasz już stronę, która jest fantastyczna pod kątem technicznym, świetnie działa na urządzeniach mobilnych i ładuje się w mgnieniu oka, pora pomyśleć o wartości jaką chcesz dostarczyć swoim odbiorcom. Jest to zatem etap planowania treści, które zamierzasz umieszczać na swojej stronie, aby dostarczyć to, czego oczekują użytkownicy korzystając z Google czyli odpowiedzi na swoje pytania. W trakcie tego proces specjaliści SEO korzystając z różnego rodzaju narzędzi tworzą bardzo rozbudowane listy słów kluczowych wpisywanych przez Internautów w danej kategorii. Słowa te łączy się w powiązane tematycznie obszary dając zaczątek do formułowania tematów, na których należałoby się skupić w artykułach zamieszczonych na serwisie. Treści to bardzo potężne narzędzie w pozycjonowaniu. Rozbudowując je dajesz znać Google, że jesteś ekspertem w danej dziedzinie i potrafisz o niej mówić językiem trafiającym do odbiorcy.`,
  },
  {
    icon: documentIcon,
    content: `Treści to bardzo potężne narzędzie w pozycjonowaniu. Rozbudowując je dajesz znać Google, że jesteś ekspertem w danej dziedzinie i potrafisz o niej mówić językiem trafiającym do odbiorcy. Twój content musi mieć jednak zawsze coś wyróżniającego się na tle konkurencji. Może to być wiedza fachowa, może to być Twoje unikalne doświadczenie z danej dziedziny, a czasem po prostu zebranie wiedzy rozsypanej w różnych miejscach. Myśl problemami swojego klienta, a tworzenie treści z dużym prawdopodobieństwem przełoży się na ruch na stronie. `,
  },
  {
    icon: arrowIcon,
    content: `Posiadając lub rozbudowując treści warto myśleć o ich dodatkowym rozpromowaniu i wskazaniu Google, że to właśnie Twoja strona jest najlepszą odpowiedzią na dane słowo kluczowe. Twoją konkurencją nie jest np. wyłącznie sklep sprzedający te same produkty. Twoim potencjalnym konkurentem jest każdy kto tworzy zbliżone artykuły - sklepy, blogerzy, duże portale, porównywarki cenowe, Wikipedia i inne. Jak wyróżnić się w tym gąszczu skoro miejsc na pierwszej stronie wynikowej jest tak niewiele a konkurencja ogromna? Tutaj jako wsparcie dla Twoich najlepszych treści w internecie przychodzą serwisy zewnętrzne, które odsyłając ze swoich artykułów do Twojej strony wskazują Google kto według nich jest autorytetem w danej dziedzinie. Jak uzyskać takie odesłanie? Oczywiście dostarczając treści czyli stosując content marketing! Specjaliści SEO są w stanie dobrać najlepsze źródła i serwisy do współpracy, tak aby potencjalny wpływ na pozycje był jak najsilniejszy. Poprzez zdobywanie publikacji na serwisach zewnętrznych i linkowaniu do Twojej strony Twój autorytet w oczach Google będzie systematycznie wzrastał, a Ty uzyskasz wyższe pozycje i więcej ruchu. `,
  },
  {
    icon: repeatIcon,
    content: `Tym sposobem docieramy do etapu, w którym historia zatacza koło i wracamy do punktu startowego. SEO to niekończący się proces obserwacji wyników, monitorowania poczynań Google oraz adaptacji do zmieniającej się rzeczywistości. Nie ma sprawdzonej, uniwersalnej recepty na sukces - gdyby została opracowana to istnienie wyszukiwarki straciłby sens, gdyż wyniki stałyby się polem wielu nadużyć i trików zatracając możliwość realizacji swojego podstawowego celu jakim jest dostarczenie najlepszej odpowiedzi na zapytanie użytkownika.`,
  },
];

const tripartite = [
  {
    icon: calendarIcon,
    title: 'Ile trwa wypozycjonowanie strony?',
    text: `Zapewne po przeczytaniu poprzedniego punktu domyślasz się już, że odpowiedź brzmi “to zależy”. Jeżeli jesteś w stanie dostarczyć treść, której jeszcze nikt nie stworzył i jest unikalna, odkrywcza w swojej dziedzinie to zdobycie wysokich pozycji może być kwestią tygodni. W przypadku kategorii mocno obleganych proces może trwać miesiącami, a nawet latami. Warto w takiej sytuacji zastanowić się czy na pewno chcesz walczyć o jedno, dwa konkretne słowa kluczowe. Dużo łatwiej jest myśleć całymi kategoriami i szukać niezagospodarowanych obszarów. Fantazja użytkowników Google sięga bardzo daleko i nie musisz obawiać się, że zabraknie dla Ciebie fraz kluczowych. Konsultant SEO z pewnością pomoże odkryć Ci takie obszary i zaplanować działania, które przełożą się na wynik pomimo twardej konkurencji.`,
  },
  {
    icon: podiumIcon,
    title: 'SEO a gwarancja wyników',
    text: `Należy powiedzieć to wprost: każdy kto oferuje gwarancję wyników w SEO jest ignorantem lub co gorsza oszustem. Jako agencji bardzo zależy nam abyś był świadom tego, że zmienność mechanizmów działania Google nie pozwala na tworzenie tak śmiałych deklaracji jak gwarancja. Gwarancje, z którymi możesz się spotkać to np. wypozycjonowanie się na 3 z 5 słów kluczowych. Takie zapisy dają zwykle agencji dowolność w wyborze tych fraz i dotyczą słów, na które już jesteś widoczny lub nie są wyszukiwane czyli “proste” do wypozycjonowania ale bez żadnego konkretnego efektu na Twój biznes, poza faktem otrzymania faktury za usługę. Brak pewności uzyskanego efektu to właściwie jedyny mankament SEO i jako potencjalny nabywca tego typu usług musisz mieć tego świadomość. Nie należy się jednak z tego powodu zniechęcać. Zdecydowana większość aktywności przynosi dobre lub bardzo dobre rezultaty - stąd właśnie tak wysoka popularność pozycjonowania.`,
  },
  {
    icon: cardIcon,
    title: 'Ile kosztuje pozycjonowanie?',
    text: `Podobnie jak z czasem oczekiwania na wyniki tak i kwestia budżetowa jest zmienna. Nie musisz jednak obawiać się, że już na starcie potrzebujesz dziesiątek tysięcy złotych. Wszystko zależy od strategii przyjętej przez agencję SEO. Wiele z najważniejszych obszarów optymalizacyjnych można zrealizować w budżecie od kilkuset do kilku tysięcy złotych. Duże znaczenie ma tutaj rozmiar Twojego serwisu, który ma bezpośrednie przełożenie na nakład pracy specjalistów. W przypadku pozycjonowania tj. link buildingu, głównym czynnikiem decydującym o cenie jest jakość serwisów, z których pozyskiwane są odsyłacze. Im wyższa, tym oczywiście lepiej, ale przy ograniczonych środkach niebagatelne znaczenie ma też pomysłowość w wyszukiwaniu takich obszarów słów kluczowych, w których uda się stosunkowo niskim kosztem zdobyć ruch na serwisie. Należy wystrzegać się jednak ofert podejrzanie tanich np. rzędu 100 zł w skali miesiąca - w takich przypadkach nie ma realnych szans na wartościowe działania.`,
  },
];

const banner = {
  title: 'Możesz nam zaufać.',
  content: `	Mamy nadzieję, że tym krótkim artykułem przybliżyliśmy Tobie nieco specyfikę naszej pracy. Jeżeli trafiłeś na tę stronę z Google to już wiesz że SEO działa :) Zapraszamy do kontaktu, na pewno znajdziemy rozwiązanie dopasowane do Twoich potrzeb i możliwości.`,
};

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
          <Subheader { ...subheader } />
          <section>
            <TwoColumnsLayout
              leftChildren={ leftSide.map(item => <Depiction { ...item } />) }
              rightChildren={ rightSide.map(item => <Depiction { ...item } />) }
            />
          </section>
          <Tripartite content={ tripartite } />
          <Banner { ...banner } />
          <ContactSection />
        </SeoBase>
      </BaseLayout>
    );
  }
}

export default SMCampaign;
