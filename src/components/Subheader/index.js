import React from 'react';
import Typography from '../Typography';

import { variables } from '../../global/helpers';
import {
  Wrapper,
  Container,
  Header,
  ParagraphText,
} from './Subheader.style';


const Subheader = ({ title, content }) => {
  return (
    <Wrapper>
      <Container>
          <Header marginBottom={ 60 }>
            { title }
          </Header>

          <ParagraphText maxWidth={ 980 }>
            { content }
          </ParagraphText>
      </Container>
    </Wrapper>
  );
};

export default Subheader;
