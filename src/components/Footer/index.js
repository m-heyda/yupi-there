import React from 'react';
import medium from '../../assets/medium.svg';
import reddit from '../../assets/reddit.svg';
import telegram from '../../assets/telegram.svg';
import twitter from '../../assets/twitter.svg';
import {
  Wrapper,
  Container,
  ElementsWrapper,
  Element,
  Heading,
  Copyright,
  Title,
  List,
  Item,
  StyledLink,
  PolicyWrapper,
} from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ElementsWrapper>
          <Element>
            <Heading>Yupi-There</Heading>
            <Copyright>
              Copyright © 2018 yupi-there All rights reserved.
            </Copyright>
          </Element>
          <Element>
            <Title>Oferta</Title>
            <List>
              <Item>
                <StyledLink to='/'>Google Ads</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/'>SEO</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/'>Analityka Web</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/'>Kampanie Social Media</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/'>Grafika Online</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/'>Content Marketing</StyledLink>
              </Item>
            </List>
          </Element>
          <Element>
            <Title>O firmie</Title>
            <List>
              <Item>
                <StyledLink to='/'>O nas</StyledLink>
              </Item>
              <Item>
                <StyledLink to='/'>Blog</StyledLink>
              </Item>
            </List>
          </Element>
          <Element>
            <Title>...</Title>
            <PolicyWrapper>
              <StyledLink to='/'>Privacy Policy</StyledLink>
              <StyledLink to='/'>Terms and Conditions</StyledLink>
            </PolicyWrapper>
          </Element>
        </ElementsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
