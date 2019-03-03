import React from 'react';
import { string, func, oneOfType, any } from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
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
  const isHero = css`
    font-size: ${fontSize.mediumHeading};
    margin: 0 0 ${marginSize.regular};
  `;

  const isHeading = css`
    font-size: ${fontSize.mediumHeading};
    margin: 0 0 ${marginSize.regular};
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
    
    ${({headingVariant}) => headingVariant === 'hero' && isHero}
    ${({headingVariant}) => headingVariant === 'heading' && isHeading}
    ${({headingVariant}) => headingVariant === 'staticHeading' && isStaticHeading}
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
  headingVariant: string,
};

export default Typography;
