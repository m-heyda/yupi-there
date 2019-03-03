import React from 'react';
import { HeroHeader, ButtonWrapper } from './Hero.style';
import Typography from '../Typography';
import { Paragraph } from '../../global/commonStyles';
import Button from '../Button';

const Hero = () => {
  return (
    <HeroHeader>
      <Typography component='h1' headingVariant='hero'>
        Współpracuj z najlepszym zespołem ekspertów
      </Typography>

      <Paragraph margin={36} maxWidth={580}>
        Zadbamy o pozycjonowanie i użyteczność twojego serwisu internetowego.
        Budujemy wzrost i zwiększamy sprzedaż dla e-commerce, startupów i firm
        B2B.
      </Paragraph>

      <ButtonWrapper>
        <Button fluid>Skontaktuj się</Button>
        <Button fluid secondary>
          Learn more
        </Button>
      </ButtonWrapper>
    </HeroHeader>
  );
};

export default Hero;
