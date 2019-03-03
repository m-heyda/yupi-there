import React from 'react';
import { Helmet } from 'react-helmet';
import { any, string } from 'prop-types';
import { Wrapper } from './SeoBase.style';

const SeoBase = ({ children, title, description }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>

      <Wrapper>
        {children}
      </Wrapper>
    </React.Fragment>
  )
};

SeoBase.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  children: any.isRequired,
};

export default SeoBase;
