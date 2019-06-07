import React from 'react';
import { SubMenuWrapper, SubMenuItem, SubMenuLink } from './Navigation.style';

const SubMenu = () => {
  return (
    <SubMenuWrapper>
      <SubMenuItem>
        <SubMenuLink href='#'>Google Ads</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink href='#'>SEO</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink href='#'>Analityka Web</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink href='/kampanie-sm'>Kampanie social media</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink href='#'>Grafika Online</SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink href='#'>Content Marketing</SubMenuLink>
      </SubMenuItem>
    </SubMenuWrapper>
  );
};

export default SubMenu;
