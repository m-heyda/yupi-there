import React, { Component } from "react"
import SeoBase from "../components/SeoBase"
import Hero from "../components/Hero"
import WhatWeDo from "../components/WhatWeDo"
import Clients from "../components/Clients"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"

import BaseLayout from "../layouts/BaseLayout"

const testimonials = [
  {
    author: "Toyota Bielany",
    content: `Yupi-There to profesjonalny i godzien zaufania zespół.
    Wykonywane dla nas projekty graficzne, projekty mailingów
    jak i działania SEM - wszystko na wysokim poziomie Jeśli
    miałabym wskazać największą wartość współpracy,
    to byłoby to super podejście do klienta.`,
  },
  {
    author: "Centrum Terapii w UK",
    content: `Zdecydowanie polecam Yupi-There. Duża odległość i kontakt
    jedynie telefoniczny nie stanowi żadnego problemu.
    W razie wątpliwości mogę liczyć na błyskawiczną odpowiedź i pomoc.
    Doceniam za terminowość, solidność i mnóstwo pomysłów.`,
  },
  {
    author: "PSTQ",
    content: `Bardzo profesjonalnie świadczone usługi - zarówno
    SEO jak i SEM. Mimo, że branża medycyny estetycznej
    nie jest najłatwiejsza do reklamowania, Panowie zawsze
    znajdywali wyjście z sytuacji. Kreatywni fachowcy
    od online marketingu z dużą wiedzą i doświadczeniem.`,
  },
  // {
  //   author: "Mebloo",
  //   content: `Yupi-There to profesjonalny i godzien zaufania zespół. Wykonywane
  //   dla nas projekty graficzne, projekty mailingów jak i działania SEM -
  //   wszystko na wysokim poziomie Jeśli miałbym wskazać największą
  //   wartość współpracy, to byłoby to super podejście do klienta.`,
  // },
]

const clients = {
  content: `Zaufali nam klienci niemal ze wszystkich branż. Kilka lat na rynku
  oraz doświadczenie z pracy z wieloma firmami utwierdziło nas w
  przekonaniu jak wiele do każdego biznesu może wnieść reklama
  internetowa. Jesteśmy profesjonalistami, którzy potrafią słuchać
  Klientów i pracować na ich sukces.`,
}

const webpageSchema = {
  name: "Strona główna",
}

const organizationSchema = {
  name: "Yupi-There",
  url: "www.yupi-there.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "[+48505950321]",
    email: "biuro@yupi-there.pl",
  },
}

class Homepage extends Component {
  render() {
    return (
      <BaseLayout>
        <SeoBase
          title="Strona główna"
          description="Opis strony głównej"
          webpageSchema={webpageSchema}
          organizationSchema={organizationSchema}
        >
          <Hero />
          <WhatWeDo />
          <Clients {...clients} />
          <Testimonials clients={testimonials} />
          <ContactSection />
        </SeoBase>
      </BaseLayout>
    )
  }
}

export default Homepage
