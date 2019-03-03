import React from 'react';
import { string, oneOfType, array, object, number } from 'prop-types';

const SvgIcon = ({
  className,
  viewBox,
  width,
  height,
  children,
  ...props
}) => {
  return (
    <svg
      className={className}
      focusable='false'
      viewBox={viewBox || `0 0 ${width} ${height}`}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </svg>
  );
};

SvgIcon.propTypes = {
  viewBox: string,
  width: number,
  height: number,
  children: oneOfType([array, object]).isRequired,
  className: string,
};

export default SvgIcon;
