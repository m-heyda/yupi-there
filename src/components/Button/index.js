import React from 'react';
import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';
import { string, bool, func, oneOfType, any } from 'prop-types';
import { variables, colors, utils } from '../../global/helpers';

const { globalSize, fontSize, transitions } = variables;
const { media } = utils;

const BORDER_RADIUS = 24;
const BORDER_THICKNESS = 2;

const linkButton = css`
  color: ${colors.lightGreen};
  font-weight: 400;
  background: transparent;
  border: 2px solid transparent;
  box-shadow: none;
`;

const afterButton = css`
  &:after {
    display: block;
    content: '';
    position: absolute;
    right: -${rem(BORDER_THICKNESS)};
    top: -${rem(BORDER_THICKNESS)};
    bottom: -${rem(BORDER_THICKNESS)};
    left: -${rem(BORDER_THICKNESS)};
    border-radius: ${rem(BORDER_RADIUS)};
    background: ${({ isSecondary }) =>
      isSecondary ? rgba(colors.greenHaze, 0.1) : rgba(colors.oxfordBlue, 0.1)};
    transform: scale(0);
    transition: transform 0.1s ${transitions.spring};
  }

  &:hover {
    &:after {
      transform: scale(1);
    }
  }
`;

const Button = ({
  component: Component,
  secondary,
  fluid,
  link,
  withIcon,
  centered,
  onClick,
  children,
  className,
  ...props
}) => {
  const ButtonIcon = withIcon;

  const YupiButton = styled(Component)`
    position: relative;
    display: ${({ isCentered }) => (isCentered ? 'flex' : 'inline-flex')};
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 ${rem(36)};
    width: ${({ isFluid }) => (isFluid ? '100%' : 'auto')};
    height: ${rem(globalSize.inputHeight)};
    color: ${({ isSecondary }) =>
      isSecondary ? colors.lightGreen : colors.white};
    font-size: ${rem(fontSize.menu)};
    font-weight: ${({ isSecondary }) => (isSecondary ? 500 : 600)};
    font-family: inherit;
    background: ${({ isSecondary }) =>
      isSecondary ? 'transparent' : colors.lightGreen};
    border: ${BORDER_THICKNESS} solid
      ${({ isSecondary }) => (isSecondary ? colors.lightGreen : 'transparent')};
    border-radius: ${rem(BORDER_RADIUS)};
    box-shadow: 0 10px 20px 0 ${rgba(colors.lightGreen, 0.2)};
    cursor: pointer;
    backface-visibility: hidden;

    ${({ isLink }) => isLink ? linkButton : afterButton}

    & > svg {
      margin: 0 0 0 ${rem(8)};
      width: ${rem(21)};
      height: ${rem(21)};
    }

    ${media.greaterThan('landscape')`
      width: auto;
    `}
  `;

  const InnerButton = styled.span`
    line-height: 1;
    z-index: 10;
  `;

  return (
    <YupiButton
      isFluid={fluid}
      isSecondary={secondary}
      isLink={link}
      isCentered={centered}
      className={className}
      onClick={e => {
        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    >
      <InnerButton>{children}</InnerButton>
      {withIcon && <ButtonIcon />}
    </YupiButton>
  );
};

Button.defaultProps = {
  component: 'button',
};

Button.propTypes = {
  onClick: func,
  component: oneOfType([string, func]).isRequired,
  children: any.isRequired,
  secondary: bool,
  link: bool,
  centered: bool,
  withIcon: any,
};

export default Button;
