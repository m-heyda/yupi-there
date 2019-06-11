import React from 'react';
import Typography from '../Typography';

import { variables } from '../../global/helpers';
import {
  Wrapper,
  Image,
} from './FullImage.style';

const Subheader = (props) => {
  return (
    <Wrapper>
      <Image { ...props} />
    </Wrapper>
  );
};

export default Subheader;
