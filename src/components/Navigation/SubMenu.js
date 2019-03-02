import React from 'react';
import {  SubMenuWrapper, SubMenuItem, SubMenuLink } from './Navigation.style';

const SubMenu = () => {
  return (
    <SubMenuWrapper>
      <SubMenuItem>
        <SubMenuLink to='#'>
          Google Ads
        </SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink to='#'>
          SEO
        </SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink to='#'>
          Analityka Web
        </SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink to='#'>
          Kampanie social media
        </SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink to='#'>
          Grafika Online
        </SubMenuLink>
      </SubMenuItem>

      <SubMenuItem>
        <SubMenuLink to='#'>
          Content Marketing
        </SubMenuLink>
      </SubMenuItem>
    </SubMenuWrapper>
  );
};

export default SubMenu;