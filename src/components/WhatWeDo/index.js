import React from 'react';
import Typography from '../Typography';
import { Paragraph } from '../../global/commonStyles';
import { Wrapper, Container } from "./WhatWeDo.style";

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
      </Container>
    </Wrapper>
  );
};

export default WhatWeDo;
