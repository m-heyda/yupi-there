import React from 'react';
import { string, bool, func, oneOfType, any } from 'prop-types';
import cn from 'classnames';

const Button = ({
  component: Component,
  secondary,
  onClick,
  children,
  ...props
}) => {
  const buttonClasses = cn('button', { 'is-secondary': secondary });

  return (
    <Component
      className={buttonClasses}
      onClick={e => {
        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    >
      <span className='button-inner-text'>{children}</span>
    </Component>
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
