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
  PolicyWrapper,
} from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ElementsWrapper>
          <LinkElement>
            <Heading>Yupi-There</Heading>
            <Copyright>
              Copyright © { new Date().getFullYear() } yupi-there All rights reserved.
            </Copyright>
          </LinkElement>
          <LinkElement>
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
          </LinkElement>
          <LinkElement>
            <Title>O firmie</Title>
            <List>
              <Item>
                <StyledLink to='/'>O nas</StyledLink>
              </Item>
            </List>
          </LinkElement>
          <LinkElement>
            <Title>...</Title>
            <PolicyWrapper>
              <StyledLink to='/'>Privacy Policy</StyledLink>
              <StyledLink to='/'>Terms and Conditions</StyledLink>
            </PolicyWrapper>
          </LinkElement>
        </ElementsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
