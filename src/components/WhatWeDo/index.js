import React from 'react';
import { HeroHeader, ButtonWrapper } from "./WhatWeDo.style";
import Typography from '../Typography';
import { Paragraph } from '../../global/commonStyles';
import Button from '../Button';

const WhatWeDo = () => {
  return (
    <Wrapper>
      <Container>
        <Typography component='h2' headingVariant='hero'>
          Czym się zajmujemy?
        </Typography>

        <Paragraph margin={36} maxWidth={580}>
          Świadczymy usługi z zakresu marketingu internetowego.
          Tworzymy i prowadzimy kampanie w Google Ads i w social mediach.
          Oferujemy pełny wachlarz działań SEO, analitykę webową oraz usługi graficzne.
        </Paragraph>

        <ButtonWrapper>
          <Button fluid>Skontaktuj się</Button>
          <Button fluid secondary>Learn more</Button>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default WhatWeDo;
