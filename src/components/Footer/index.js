import React from 'react';
import {
  Wrapper,
  Container,
  ElementsWrapper,
  LinkElement,
  Heading,
  Copyright,
  Title,
  List,
  Item,
  StyledLink,
  // PolicyWrapper,
  LinkImage,
} from './Footer.style';

import telegramIcon from '../../assets/telegram.svg';
import twitterIcon from '../../assets/twitter.svg';
import redditIcon from '../../assets/reddit.svg';
import mediumIcon from '../../assets/medium.svg';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ElementsWrapper>
          <LinkElement>
            <Heading>Yupi-There</Heading>
            <Copyright>
              Copyright © { new Date().getFullYear() } yupi-there<br />All rights reserved.
            </Copyright>
          </LinkElement>
          <LinkElement>
            <Title>Oferta</Title>
            <List>
              <Item>
                <StyledLink to='/google-ads/'>Google Ads</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/seo/'>SEO</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/analityka/'>Analityka Web</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/kampanie-sm/'>Kampanie Social Media</StyledLink>
              </Item>
            </List>
          </LinkElement>
          <LinkElement>
            <Title>O firmie</Title>
            <List>
              <Item>
                <StyledLink to='/o-nas/'>O nas</StyledLink>
              </Item>
            </List>
          </LinkElement>
          {/* <LinkElement>
            <Title>Social Media</Title>
            <LinkImage href="#">
              <img src={ telegramIcon } alt="Telegram" />
            </LinkImage>
            <LinkImage href="#">
              <img src={ twitterIcon } alt="Twitter" />
            </LinkImage>
            <LinkImage href="#">
              <img src={ redditIcon } alt="Reddit" />
            </LinkImage>
            <LinkImage href="#">
              <img src={ mediumIcon } alt="Medium" />
            </LinkImage>
          </LinkElement> */}
          {/* <LinkElement>
            <Title>...</Title>
            <PolicyWrapper>
              <StyledLink href='/'>Privacy Policy</StyledLink>
              <StyledLink href='/'>Terms and Conditions</StyledLink>
            </PolicyWrapper>
          </LinkElement> */}
        </ElementsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
