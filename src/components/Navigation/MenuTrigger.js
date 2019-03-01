import React from 'react';
import { BurgerWrapper, BurgerIcon } from './Navigation.style';

const MenuTrigger = ({ onClick, isActive }) => {
  return (
    <BurgerWrapper onClick={onClick} className={isActive ? 'isActive' : null}>
      <BurgerIcon />
    </BurgerWrapper>
  );
};

export default MenuTrigger;