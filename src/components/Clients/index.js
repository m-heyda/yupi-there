import React from "react"
import PropTypes from "prop-types"
import Typography from "../Typography"
import Button from "../Button"
import { Paragraph } from "../../global/commonStyles"
import { Wrapper, Container, CompaniesWrapper } from "./Clients.style"
import { variables } from "../../global/helpers"
// import NikeIcon from "../Icons/NikeIcon"

import toyotaLogo from "../../assets/toyota-bielany-logo.png"
import pstqLogo from "../../assets/pstq-logo.jpeg"
import centrumTerapiiLogo from "../../assets/centrum-terapii-logo.jpg"

const { marginSize } = variables

const propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  withoutButton: PropTypes.bool,
}

const defaultProps = {
  title: "Z kim współpracowaliśmy?",
  withoutButton: false,
}

const Clients = ({ title, content, withoutButton }) => {
  return (
    <Wrapper>
      <Container>
        <Typography component="p" headingVariant="heading">
          {title}
        </Typography>

        <Paragraph margin={marginSize.large} maxWidth={580}>
          {content}
        </Paragraph>

        <CompaniesWrapper>
          <img src={toyotaLogo} alt="Toyota Bielany" />
          <img src={pstqLogo} alt="PSTQ" />
          <img src={centrumTerapiiLogo} alt="Centrum Terapii" />

          {/* <NikeIcon />
          <NikeIcon />
          <NikeIcon />
          <NikeIcon />
          <NikeIcon />
          <NikeIcon /> */}
        </CompaniesWrapper>

        {!withoutButton && (
          <Button component="a" href="#contact" centered>
            Skontaktuj się
          </Button>
        )}
      </Container>
    </Wrapper>
  )
}

Clients.propTypes = propTypes
Clients.defaultProps = defaultProps

export default Clients
