import React from 'react';
import { string, bool, func, oneOfType, any } from 'prop-types';
import cn from 'classnames';

const Typography = ({
  component: Component,
  headingVariant,
  onClick,
  children,
  ...props
}) => {
  const typographyClasses = cn('heading', {
    'hero': headingVariant === 'hero',
    'heading': headingVariant === 'heading',
    'static-heading': headingVariant === 'staticHeading'
  });

  return (
    <Component
      className={typographyClasses}
      onClick={e => {
        onClick(e);
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  component: 'h5',
};

Typography.propTypes = {
  onClick: func,
  component: oneOfType([string, func]).isRequired,
  children: any.isRequired,
  headingVariant: string,
};

export default Typography;
