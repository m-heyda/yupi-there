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
  TilesContainer,
  Header,
  ParagraphText,
} from './HowWeWork.style';

const { fontSize } = variables;

const tilesData = [
  {
    iconUrl: worldIcon,
    title: 'Analiza optymalizacyjna serwisu',
  },
  {
    iconUrl: chartIcon,
    title: 'Analiza fraz kluczowych oraz konkurencji',
  },
  {
    iconUrl: searchIcon,
    title: 'Analiza jakości ruchu oraz użyteczności serwisu',
  },
  {
    iconUrl: settingsIcon,
    title: 'Przeprowadzenie migracji serwisu',
  },
  {
    iconUrl: atomIcon,
    title: 'Przeprowadzenie zaawansowanej konfiguracji Google Analytics',
  },
  {
    iconUrl: cartIcon,
    title: 'Optymalizacja współczynnika konwersji',
  },
];

const HowWeWork = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <Header marginBottom={ 32 }>
            Jak działamy?
          </Header>

          <ParagraphText margin={24} maxWidth={450}>
            Popularność serwisów społecznościowych otworzyła
            dla reklamodawców ogromne możliwości promocji.
            Reklamy na Facebooku są dziś jednym z głównych filarów promocji firmy w internecie.
          </ParagraphText>

          <ParagraphText maxWidth={450}>
            Pozwalają one docierać do użytkowników na podstawie
            ich zainteresowań - informacji na ich temat platformy
            społecznościowe mają pod dostatkiem - wykorzystują
            w tym celu dane o aktywnościach użytkowników.
            Ogromnym plusem reklamy w social mediach jest to,
            że docieramy do użytkownika w miejscu, gdzie spędza on najwięcej czasu.
          </ParagraphText>
        </ContentWrapper>

        <ContentWrapper>
          <Header marginBottom={ 48 }>
            Narzędzia z których korzystamy:
          </Header>
          <TilesWrapper>
            { tilesData.map(tile => (
              <Tile key={ tile.title }>
                <TileIcon src={ tile.iconUrl } alt={ tile.title } />
                <p>{ tile.title }</p>
              </Tile>
            )) }
          </TilesWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default HowWeWork;
