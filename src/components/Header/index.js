import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import {
  HeaderBackground,
  HeaderContent,
  ContentWrapper,
  ButtonWrapper,
  ParagraphText,
  Title,
} from './Header.style';
import { variables } from '../../global/helpers';

import megaphoneBg from '../../assets/megaphoneBg.svg';

const { marginSize } = variables;

const Header = ({ title, content, ctaLabel, image }) => {
  return (
    <HeaderBackground>
      <HeaderContent>
        <ContentWrapper>
          <Title>
            { title }
          </Title>

          <ParagraphText margin={marginSize.medium} maxWidth={580} align='left'>
            { content }
          </ParagraphText>

          <ButtonWrapper>
            <Button fluid>{ ctaLabel }</Button>
          </ButtonWrapper>
        </ContentWrapper>

        <img src={image || megaphoneBg} alt='Hero background' />
      </HeaderContent>
    </HeaderBackground>
  );
};

export default Header;
