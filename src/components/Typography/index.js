import React from 'react';
import { string, func, oneOfType, any } from 'prop-types';
import cn from 'classnames';
import styled, { keyframes } from 'styled-components';
import { rem, rgba } from 'polished';
import { variables, colors } from '../../global/helpers';

const { fontSize, fontFamily, marginSize, globalSize } = variables;

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

  const YupiTypography = styled(Component)`
    margin: 0 0 ${rem(marginSize.small)};
    font-family: ${fontFamily.secondaryFont};
    font-size: ${rem(fontSize.mediumHeading)};
    font-weight: 600;
    color: ${colors.darkBlue};
    text-align: center;
    line-height: 1.29;
  `;

  return (
    <YupiTypography
      className={typographyClasses}
      onClick={e => {
        onClick(e);
      }}
      {...props}
    >
      {children}
    </YupiTypography>
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
