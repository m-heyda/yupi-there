import React from 'react';
import Typography from '../Typography';

import { variables } from '../../global/helpers';
import {
  Wrapper,
  Container,
  Header,
  ParagraphText,
} from './Subheader.style';

const Subheader = ({ title, content, borderless }) => {
  return (
    <Wrapper borderless={ borderless }>
      <Container>
          <Header marginBottom={ 60 }>
            { title }
          </Header>

          <ParagraphText maxWidth={ 980 } dangerouslySetInnerHTML={ { __html: content } } />
      </Container>
    </Wrapper>
  );
};

export default Subheader;
