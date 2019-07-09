import React from 'react';
import { SubMenuWrapper, SubMenuItem, SubMenuLink } from './Navigation.style';

const SubMenu = () => {
  return (
    <SubMenuWrapper>
      <SubMenuItem>
        <SubMenuLink to='/reklamy-google/'>Google Ads</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink to='/seo/'>SEO</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink to='/analityka/'>Analityka Web</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink to='/kampanie-sm/'>Kampanie social media</SubMenuLink>
      </SubMenuItem>
    </SubMenuWrapper>
  );
};

export default SubMenu;
