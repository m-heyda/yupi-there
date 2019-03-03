import React from 'react';
import cn from 'classnames';
import MenuItem from './MenuItem';
import Button from '../Button';
import { MainMenu, MainMenuItem } from './Navigation.style';

const Menu = ({ isActive }) => {
  const menuClasses = cn({ isActive: isActive });

  return (
    <MainMenu className={menuClasses}>
      <MenuItem link='#' label='Oferta' hasSubmenu />
      <MenuItem link='#' label='O nas' />
      <MenuItem link='#' label='Blog' />

      <MainMenuItem>
        <Button fluid>Skontaktuj się</Button>
      </MainMenuItem>
    </MainMenu>
  );
};

export default Menu;
