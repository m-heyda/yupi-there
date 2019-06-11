import React from 'react';

import {
  Wrapper,
  Container,
  Title,
  ParagraphText,
} from './Banner.style';

const Banner = ({ title, content }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{ title }</Title>
        <ParagraphText>{ content }</ParagraphText>
      </Wrapper>
    </Container>
  );
};

export default Banner;
