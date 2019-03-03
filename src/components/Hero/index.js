import React from 'react';
import {HeroHeader} from "./Hero.style";
import Typography from '../Typography';
import { Paragraph } from '../../global/commonStyles';
import Button from '../Button';

const Hero = () => {
  return (
    <HeroHeader>
      <Typography component='h1' headingVariant='hero'>
        Współpracuj z najlepszym zespołem ekspertów
      </Typography>
      <Paragraph>
        Zadbamy o pozycjonowanie i użyteczność twojego serwisu internetowego. Budujemy wzrost i zwiększamy sprzedaż dla e-commerce, startupów i firm B2B.
      </Paragraph>
      <div>
        buttons
      </div>
    </HeroHeader>
  );
};

export default Hero;
