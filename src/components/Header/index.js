import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { Paragraph } from '../../global/commonStyles';
import {
  HeaderContent,
  ContentWrapper,
  ButtonWrapper,
} from './Header.style';
import { variables } from '../../global/helpers';

import megaphoneBg from '../../assets/megaphoneBg.svg';

const { marginSize } = variables;

const Header = () => {
  return (
    <HeaderContent>
      <ContentWrapper>
        <Typography component='h1' headingVariant='hero' align='left'>
          Kampanie reklamowe w social mediach
        </Typography>

        <Paragraph margin={marginSize.medium} maxWidth={580} align='left'>
          Zadbamy o pozycjonowanie i użyteczność twojego serwisu
          internetowego. Budujemy wzrost i zwiększamy sprzedaż dla e-
          commerce, startupów i firm B2B.
        </Paragraph>

        <ButtonWrapper>
          <Button fluid>Skontaktuj się</Button>
        </ButtonWrapper>
      </ContentWrapper>

      <img src={megaphoneBg} alt='Hero background' />
    </HeaderContent>
  );
};

export default Header;
