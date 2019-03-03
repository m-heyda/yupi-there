import React from 'react';
import { string, bool, func, oneOfType, any } from 'prop-types';
import cn from 'classnames';
import { YupiButton, InnerButton } from './Button.style';

const Button = ({
  component: Component,
  secondary,
  onClick,
  children,
  ...props
}) => {
  const buttonClasses = cn('button', { 'is-secondary': secondary });

  return (
    <YupiButton>
      <Component
        className={buttonClasses}
        onClick={e => {
          if (onClick) {
            onClick(e);
          }
        }}
        {...props}
      >
        <InnerButton>
          {children}
        </InnerButton>
      </Component>
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
};

export default Button;
