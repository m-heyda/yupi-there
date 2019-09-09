import React from 'react';

import {
  Wrapper,
  Container,
} from './ListLayout.style';

const ListLayout = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        { children }
      </Wrapper>
    </Container>
  );
};

export default ListLayout;
