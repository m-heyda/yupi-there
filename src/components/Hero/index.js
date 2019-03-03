import React from 'react';
import {HeroHeader} from "./Hero.style";
import Typography from '../Typography';
import Button from '../Button';

const Hero = () => {
  return (
    <HeroHeader>
      <Typography component='h1' headingVariant='hero'>
        Współpracuj z najlepszym zespołem ekspertów
      </Typography>
      <p>
        Zadbamy o pozycjonowanie i użyteczność twojego serwisu internetowego. Budujemy wzrost i zwiększamy sprzedaż dla e-commerce, startupów i firm B2B.
      </p>
      <div>
        <Button>Skontaktuj się</Button>
        <Button secondary>Learn more</Button>
      </div>
    </HeroHeader>
  );
};

export default Hero;
