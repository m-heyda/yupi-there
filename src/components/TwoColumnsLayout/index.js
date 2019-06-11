import React from 'react';

import {
  Wrapper,
  WrapperColumn,
  Container,
  Column,
} from './TwoColumnsLayout.style';

const TwoColumnsLayout = ({ header, leftChildren, rightChildren, centerBottomChildren }) => {
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
      { centerBottomChildren && <WrapperColumn>{ centerBottomChildren }</WrapperColumn> }
    </Container>
  );
};

export default TwoColumnsLayout;
