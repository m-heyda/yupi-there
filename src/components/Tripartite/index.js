import React from 'react';

import TwoColumnsLayout from '../TwoColumnsLayout';

import {
  ParagraphText,
  Container,
  Image,
  Title,
  Header,
} from './Tripartite.style';

const Item = ({ icon, title, text }) => (
  <div>
    <Header>
      <Image src={ icon } />
      <Title>{ title }</Title>
    </Header>
    <ParagraphText>{ text }</ParagraphText>
  </div>
)

const Tripartite = ({ content }) => {
  const columnsItems = content.slice(0, 2);
  const restItems = content.slice(2, content.length);

  return (
    <section>
      <TwoColumnsLayout
        leftChildren={ <Item { ...columnsItems[0] }/> }
        rightChildren={ <Item { ...columnsItems[1] }/> }
        centerBottomChildren={ restItems.map((item, i) => <Item key={ i } { ...item } />)}
      />
    </section>
  );
};

export default Tripartite;
