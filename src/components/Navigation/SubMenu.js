import React from 'react';
import { SubMenuWrapper, SubMenuItem, SubMenuLink } from './Navigation.style';

const SubMenu = () => {
  return (
    <SubMenuWrapper>
      <SubMenuItem>
        <SubMenuLink href='/reklamy-google/'>Google Ads</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink href='/oferta-seo/'>SEO</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink href='/analityka/'>Analityka Web</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink href='/kampanie-sm/'>Kampanie social media</SubMenuLink>
      </SubMenuItem>
    </SubMenuWrapper>
  );
};

export default SubMenu;
