import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { Paragraph } from '../../global/commonStyles';
import { Wrapper, Container, CompaniesWrapper } from './Clients.style';
import { variables } from '../../global/helpers';
import PornhubIcon from '../Icons/PornhubIcon';

const { marginSize } = variables;

const Clients = () => {
  return (
    <Wrapper>
      <Container>
        <Typography component='h2' headingVariant='heading'>
          Z kim współpracowaliśmy?
        </Typography>

        <Paragraph margin={marginSize.large} maxWidth={580}>
          Zaufali nam klienci niemal ze wszystkich branż. Kilka lat na rynku
          oraz doświadczenie z pracy z wieloma firmami utwierdziło nas w
          przekonaniu jak wiele do każdego biznesu może wnieść reklama
          internetowa. Jesteśmy profesjonalistami, którzy potrafią słuchać
          Klientów i pracować na ich sukces.
        </Paragraph>

        <CompaniesWrapper>
          <PornhubIcon />
          <PornhubIcon />
          <PornhubIcon />
          <PornhubIcon />
          <PornhubIcon />
          <PornhubIcon />
        </CompaniesWrapper>

        <Button isCentered>Skontaktuj się</Button>
      </Container>
    </Wrapper>
  );
};

export default Clients;
