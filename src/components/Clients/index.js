import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { Paragraph } from '../../global/commonStyles';
import { Wrapper, Container, ButtonWrapper } from '../Clients/Clients.style';

const Clients = () => {
  return (
    <Wrapper>
      <Container>
        <Typography component='h2' headingVariant='heading'>
          Z kim współpracowaliśmy?
        </Typography>

        <Paragraph margin={41} maxWidth={580}>
          Zaufali nam klienci niemal ze wszystkich branż. Kilka lat na rynku
          oraz doświadczenie z pracy z wieloma firmami utwierdziło nas w
          przekonaniu jak wiele do każdego biznesu może wnieść reklama
          internetowa. Jesteśmy profesjonalistami, którzy potrafią słuchać
          Klientów i pracować na ich sukces.
        </Paragraph>

        <Button isCentered>Skontaktuj się</Button>
      </Container>
    </Wrapper>
  );
};

export default Clients;
