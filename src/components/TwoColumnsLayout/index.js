import React from 'react';

import {
  Wrapper,
  Container,
  Column,
} from './TwoColumnsLayout.style';

const TwoColumnsLayout = ({ header, leftChildren, rightChildren }) => {
  return (
    <Container>
      <Wrapper>{ header }</Wrapper>
      <Wrapper>
        <Column>
          { leftChildren }
        </Column>
        <Column>
          { rightChildren }
        </Column>
      </Wrapper>
    </Container>
  );
};

export default TwoColumnsLayout;
