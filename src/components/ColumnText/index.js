import React from 'react';
import Typography from '../Typography';

import worldIcon from '../../assets/world.svg';
import chartIcon from '../../assets/chart.svg';
import searchIcon from '../../assets/search.svg';
import settingsIcon from '../../assets/settings.svg';
import atomIcon from '../../assets/atom.svg';
import cartIcon from '../../assets/cart.svg';

import { variables } from '../../global/helpers';
import {
  Wrapper,
  Container,
  TilesWrapper,
  Tile,
  TileIcon,
  ContentWrapper,
  Header,
  ParagraphText,
  ColumnsWrapper,
} from './ColumnText.style';


const ColumnText = ({ title, leftParagraph, rightParagraph }) => {
  return (
    <Wrapper>
      <Container>
          <Header marginBottom={ 32 }>
            { title }
          </Header>

          <ColumnsWrapper>
            <ParagraphText margin={24} maxWidth={450}>
              {leftParagraph}
            </ParagraphText>

            <ParagraphText maxWidth={450}>
              {rightParagraph}
            </ParagraphText>
          </ColumnsWrapper>
      </Container>
    </Wrapper>
  );
};

export default ColumnText;
