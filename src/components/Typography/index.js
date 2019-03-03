import React from 'react';
import { string, func, oneOfType, oneOf, any } from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { variables, colors, utils } from '../../global/helpers';

const { fontSize, fontFamily, marginSize, breakpoints } = variables;
const { media } = utils;

const Typography = ({
  component: Component,
  headingVariant,
  onClick,
  children,
  ...props
}) => {
  const mobileHeading = css`
    font-size: ${fontSize.mediumHeading};
    margin: 0 auto ${marginSize.regular};
  `;

  const isHero = css`
    max-width: ${rem('560px')};
    ${mobileHeading}

    ${media.greaterThan(breakpoints.landscape)`
      font-size: ${fontSize.heroHeading};
      line-height: 1.27;
      margin: 0 auto ${marginSize.small};
    `}
  `;

  const isHeading = css`
    ${mobileHeading}
  `;

  const isStaticHeading = css`
    font-size: ${fontSize.smallHeading};
    margin: 0 0 ${marginSize.small};
  `;

  const YupiTypography = styled(Component)`
    font-family: ${fontFamily.secondaryFont};
    font-weight: 600;
    color: ${colors.darkBlue};
    text-align: center;
    line-height: 1.29;
    
    ${({ headingVariant }) => headingVariant === 'hero' && isHero}
    ${({ headingVariant }) => headingVariant === 'heading' && isHeading}
    ${({ headingVariant }) =>
      headingVariant === 'staticHeading' && isStaticHeading}
  `;

  return (
    <YupiTypography
      headingVariant={headingVariant}
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
  headingVariant: oneOf(['hero', 'heading', 'staticHeading']).isRequired,
};

export default Typography;
