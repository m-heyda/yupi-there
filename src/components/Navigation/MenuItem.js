import React from 'react';
import { string, bool } from 'prop-types';
import SubMenu from './SubMenu';
import { MainMenuItem, MenuLink } from './Navigation.style';

const MenuItem = ({ link, label, hasSubmenu }) => {
  return (
    <MainMenuItem hasSubmenu={hasSubmenu}>
      <MenuLink href={link}>{label}</MenuLink>

      {hasSubmenu && <SubMenu />}
    </MainMenuItem>
  );
};

MenuItem.propTypes = {
  link: string.isRequired,
  label: string.isRequired,
  hasSubmenu: bool,
};

export default MenuItem;
