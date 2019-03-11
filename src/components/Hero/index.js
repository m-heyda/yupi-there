import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import HeroBackground from '../../assets/heroBackground.svg';
import { Paragraph } from '../../global/commonStyles';
import { HeroHeader, ButtonWrapper } from './Hero.style';

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

      <img
        src={HeroBackground}
        alt='Hero background'
        className='heroBackground'
      />
    </HeroHeader>
  );
};

export default Hero;
