import React from 'react';

import {
  Wrapper,
  Container,
  Header,
} from './LookLayout.style';

const LookLayout = ({ title, children }) => {
  return (
    <Container>
      <Wrapper>
        <Header>{title}</Header>
        { children }
      </Wrapper>
    </Container>
  );
};

export default LookLayout;
