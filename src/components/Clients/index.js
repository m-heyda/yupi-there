import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import Button from '../Button';
import { Paragraph } from '../../global/commonStyles';
import { Wrapper, Container, CompaniesWrapper } from './Clients.style';
import { variables } from '../../global/helpers';
import PornhubIcon from '../Icons/PornhubIcon';

const { marginSize } = variables;

const propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const defaultProps = {
  title: 'Z kim współpracowaliśmy?',
};

const Clients = ({ title, content }) => {
  return (
    <Wrapper>
      <Container>
        <Typography component='h2' headingVariant='heading'>
          { title }
        </Typography>

        <Paragraph margin={marginSize.large} maxWidth={580}>
          { content }
        </Paragraph>

        <CompaniesWrapper>
          <PornhubIcon />
          <PornhubIcon />
          <PornhubIcon />
          <PornhubIcon />
          <PornhubIcon />
          <PornhubIcon />
        </CompaniesWrapper>

        <Button component="a" href="#contact" centered>Skontaktuj się</Button>
      </Container>
    </Wrapper>
  );
};

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;
