import React from 'react';

import {
  ParagraphText,
  FeatureElement,
  FeatureItemHeader,
  FeatureItemHeaderContent,
  FeatureItemIcon,
  FeatureItemTitle,
  FeatureItemSubtitle,
  FeatureItemHeading,
} from './FeatureItem.style';

const FeatureItem = ({ title, icon, subtitle, introduction, howItWorksTitle, howItWorksContent }) => {
  return (
    <FeatureElement key={ title }>
      <FeatureItemHeader>
        <FeatureItemIcon src={ icon } alt={ title } />
        <FeatureItemHeaderContent>
          <FeatureItemTitle>{ title }</FeatureItemTitle>
          <FeatureItemSubtitle>{ subtitle }</FeatureItemSubtitle>
        </FeatureItemHeaderContent>
      </FeatureItemHeader>
      <ParagraphText>{ introduction }</ParagraphText>
      <FeatureItemHeading>{ howItWorksTitle }</FeatureItemHeading>
      <ParagraphText>{ howItWorksContent }</ParagraphText>
    </FeatureElement>
  );
};

export default FeatureItem;
