import React from 'react';
import SvgIcon from './';

const RightArrow = props => (
  <SvgIcon width={24} height={24} {...props}>
    <path
      strokeLinejoin='arcs'
      strokeLinecap='square'
      strokeWidth={3}
      fill='none'
      stroke='currentColor'
      d='M5 12h13m-6-7l7 7-7 7'
    />
  </SvgIcon>
);

export default RightArrow;
