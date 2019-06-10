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


const ColumnText = () => {
  return (
    <Wrapper>
      <Container>
          <Header marginBottom={ 32 }>
            Dlaczego Google Ads?
          </Header>

          <ColumnsWrapper>
            <ParagraphText margin={24} maxWidth={450}>
              Wyobraź sobie następującą sytuację… Znalazłeś szybki i efektywny sposób na wypromowanie swojej firmy. W przemyślany sposób kierujesz swoje reklamy na wybranych użytkowników i sam decydujesz, ile chcesz poświęcić budżetu na to. Płacisz tylko kiedy Twoja reklama przyniesie zamierzony rezultat.  
            </ParagraphText>

            <ParagraphText maxWidth={450}>
              Docierasz do użytkowników w domu, w drodze do pracy, na wakacjach - wszędzie tam gdzie korzystają z komputera, smartfonu lub tabletu. Dodatkowo znasz dokładne dane i wpływ każdego pojedynczego działania na ostateczny wynik. Brzmi dobrze…? Tak właśnie wygląda skutecznie prowadzona kampania AdWords!
            </ParagraphText>
          </ColumnsWrapper>
      </Container>
    </Wrapper>
  );
};

export default ColumnText;
