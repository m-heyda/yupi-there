import React from 'react';
import MenuItem from './MenuItem';
import { MainMenu, MainMenuItem } from './Navigation.style';

const Menu = (props) => {
  return (
    <MainMenu>
      <MenuItem link='#' label='Oferta' hasSubmenu />
      <MenuItem link='#' label='O nas' />
      <MenuItem link='#' label='Blog' />

      <MainMenuItem>
        Button
      </MainMenuItem>
    </MainMenu>
  );
};

export default Menu;