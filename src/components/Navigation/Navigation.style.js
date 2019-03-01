import styled, { keyframes}  from 'styled-components';
import { rem, rgba } from 'polished';
import { Link } from 'react-router-dom';
import {  variables, colors } from '../../global/helpers';
import { containerStyles } from '../../global/commonStyles';

const { globalSize, transitions } = variables;

export const animateTopLine = keyframes`
  0% {
    transform: translateY(-3px) rotate(0);
  }
  
  40% {
    transform: translateY(1px) rotate(0);
  }
  
  100% {
    transform: translateY(1px) rotate(45deg);
  }
`;

export const animateBottomLine = keyframes`
  0% {
    transform: translateY(3px) rotate(0);
  }
  
  40% {
    transform: translateY(-1px) rotate(0);
  }
  
  100% {
    transform: translateY(-1px) rotate(-45deg);
  }
`;

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${rem(globalSize.navigationHeight)};
`;

export const NavWrapper = styled.div`
  ${containerStyles};
  
  display: flex;
  justify-content: space-between;
  height: ${rem(globalSize.buttonHeight)};
`;

export const LogoWrapper = styled.div`
  flex: 0 0 auto;
  align-self: center;
`;

export const MainMenu = styled.ul`
  display: none; // @todo
`;

export const MainMenuItem = styled.li``;
export const MenuLink = styled(Link)``;
export const SubMenuWrapper = styled.ul``;
export const SubMenuItem = styled.li``;

export const BurgerIcon = styled.span`
  position: relative;
  display: block;
  
  &:before,
  &:after {
    content: '';
    display: block;
    width: ${rem('22px')};
    height: 2px;
    background: ${colors.darkBlue};
    transition: transform .5s ${transitions.spring};
  }
  
  &:before {
    transform: translateY(-3px);
  }
  
  &:after {
    transform: translateY(3px);
  }
`;

export const BurgerWrapper = styled.button`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  border-radius: 100%;
  align-self: center;
  width: ${rem(globalSize.buttonHeight)};
  height: ${rem(globalSize.buttonHeight)};
  
  &:focus {
    outline: 0;
    box-shadow: inset 0 0 7px 1px ${rgba(colors.cadetBlue, .25)};
  }
  
  &.isActive {
    ${BurgerIcon} {
      &:before {
        animation: ${animateTopLine} .5s ${transitions.spring} forwards;
      }
  
      &:after {
        animation: ${animateBottomLine} .5s ${transitions.spring} forwards;
      }
    }
  }
`;
