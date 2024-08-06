import React from 'react';

import {
  ParagraphText,
  Container,
  Image,
} from './Depiction.style';

const Depiction = ({ icon, content, ...props }) => {
  return (
    <Container { ...props } >
      <Image src={ icon } />
      <ParagraphText>{content}</ParagraphText>
    </Container>
  );
};

export default Depiction;
