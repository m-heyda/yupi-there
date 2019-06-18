import React from 'react';

import {
  ParagraphText,
  Container,
  Image,
} from './Depiction.style';

const Depiction = ({ icon, content }) => {
  return (
    <Container>
      <Image src={ icon } />
      <ParagraphText dangerouslySetInnerHTML={ { __html: content } } />
    </Container>
  );
};

export default Depiction;
