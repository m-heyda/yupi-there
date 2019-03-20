import React from 'react';
import Typography from '../Typography';
import SingleTestimonial from './SingleTestimonial';
import { Wrapper, Container, TestimonialsWrapper } from './Testimonials.style';

const Testimonials = () => {
  return (
    <Wrapper>
      <Container>
        <Typography
          align='left'
          component='h3'
          headingVariant='heading'
          maxWidth='380px'
        >
          Dołącz do grona zadowolonych klientów Yupi-there
        </Typography>

        <TestimonialsWrapper>
          <SingleTestimonial author='Toyota Bielany'>
            Współpracę z Yupi-There oceniam na 5+. Nasze kampanie notują wzrost
            wyników każdego kolejnego miesiąca. Duży plus za zaangażowanie,
            super podejście i kreatywność w działaniach.
          </SingleTestimonial>

          <SingleTestimonial author='Centrum Terapii UK'>
            Zdecydowanie polecam Yupi-There. Duża odległość i kontakt jedynie
            telefoniczny nie stanowi żadnego problemu. W razie wątpliwości mogę
            liczyć na błyskawiczną odpowiedź i pomoc. Doceniam za terminowość,
            solidność i mnóstwo pomysłów.
          </SingleTestimonial>

          <SingleTestimonial author='PSTQ'>
            Bardzo profesjonalnie świadczone usługi - zarówno SEO jak i SEM.
            Mimo, że branża medycyny estetycznej nie jest najłatwiejsza do
            reklamowania, Panowie zawsze znajdywali wyjście z sytuacji.
            Kreatywni fachowcy od online marketingu z dużą wiedzą i
            doświadczeniem.
          </SingleTestimonial>

          <SingleTestimonial author='Mebloo'>
            Yupi-There to profesjonalny i godzien zaufania zespół. Wykonywane
            dla nas projekty graficzne, projekty mailingów jak i działania SEM -
            wszystko na wysokim poziomie Jeśli miałbym wskazać największą
            wartość współpracy, to byłoby to super podejście do klienta.
          </SingleTestimonial>
        </TestimonialsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
