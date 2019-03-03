import React from 'react';
import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';
import { string, bool, func, oneOfType, any } from 'prop-types';
import { variables, colors, utils } from '../../global/helpers';

const { globalSize, fontSize } = variables;
const { media } = utils;

const linkButton = css`
  color: ${colors.lightGreen};
  font-weight: 400;
  background: transparent;
  border: 2px solid transparent;
  box-shadow: none;
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
    display: ${props => (props.isCentered ? 'flex' : 'inline-flex')};
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 ${rem('36px')};
    width: ${props => (props.isFluid ? '100%' : 'auto')};
    height: ${rem(globalSize.inputHeight)};
    color: ${props => (props.isSecondary ? colors.lightGreen : colors.white)};
    font-size: ${rem(fontSize.menu)};
    font-weight: ${props => (props.isSecondary ? 500 : 600)};
    font-family: inherit;
    background: ${props =>
      props.isSecondary ? 'transparent' : colors.lightGreen};
    border: 2px solid
      ${props => (props.isSecondary ? colors.lightGreen : 'transparent')};
    border-radius: ${rem('24px')};
    box-shadow: 0 10px 20px 0 ${rgba(colors.lightGreen, 0.2)};
    cursor: pointer;

    ${({ isLink }) => isLink && linkButton}

    & > svg {
      margin: 0 0 0 ${rem('8px')};
      width: ${rem('21px')};
      height: ${rem('21px')};
    }

    ${media.greaterThan('landscape')`
      width: auto;
    `}
  `;

  const InnerButton = styled.span`
    line-height: 1;
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
