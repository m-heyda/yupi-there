import React from 'react';
import SvgIcon from './';

const QuoteIcon = props => (
  <SvgIcon width={35} height={32} {...props}>
    <path
      fill='#00D664'
      fillRule='evenodd'
      d='M35 4.676c-5.035 1.96-7.576 6.414-7.623 13.362h6.514V32H20.517V21.044c0-3.162.197-5.912.59-8.25.392-2.339 1.42-4.677 3.083-7.015C25.853 3.44 28.417 1.514 31.882 0L35 4.676zm-20.517 0c-5.036 1.96-7.6 6.414-7.692 13.362h6.583V32H0V21.044c0-3.162.196-5.912.589-8.25.393-2.339 1.409-4.677 3.049-7.015C5.278 3.44 7.853 1.514 11.364 0l3.119 4.676z'
    />
  </SvgIcon>
);

export default QuoteIcon;
