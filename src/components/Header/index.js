import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { Paragraph } from '../../global/commonStyles';
import {
  HeaderBackground,
  HeaderContent,
  ContentWrapper,
  ButtonWrapper,
} from './Header.style';
import { variables } from '../../global/helpers';

import megaphoneBg from '../../assets/megaphoneBg.svg';

const { marginSize } = variables;

const Header = ({ title, content, ctaLabel }) => {
  return (
    <HeaderBackground>
      <HeaderContent>
        <ContentWrapper>
          <Typography component='h1' headingVariant='hero' align='left'>
            { title }
          </Typography>

          <Paragraph margin={marginSize.medium} maxWidth={580} align='left'>
            { content }
          </Paragraph>

          <ButtonWrapper>
            <Button fluid>{ ctaLabel }</Button>
          </ButtonWrapper>
        </ContentWrapper>

        <img src={megaphoneBg} alt='Hero background' />
      </HeaderContent>
    </HeaderBackground>
  );
};

export default Header;
