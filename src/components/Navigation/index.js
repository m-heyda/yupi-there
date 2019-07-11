import React, { Component } from 'react';
import Menu from './Menu';
import MenuTrigger from './MenuTrigger';
import { Navbar, NavWrapper, LogoWrapper } from './Navigation.style';

import logoImage from '../../assets/logo.svg';

const NavContext = React.createContext();

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      isSticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.stickNavigation);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.stickNavigation);
  }

  stickNavigation = () => {
    this.setState({
      isSticky: window.pageYOffset > 0,
    });
  }

  triggerMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  render() {
    const { isMenuOpen, isSticky } = this.state;

    return (
      <Navbar isSticky={ isSticky }>
        <NavWrapper>
          <LogoWrapper>
            <a href="/">
              <img src={ logoImage } alt="Yupi-There" />
            </a>
          </LogoWrapper>
          <NavContext.Provider value={{ menuTrigger: this.triggerMenu }}>
            <Menu isActive={isMenuOpen} />
          </NavContext.Provider>
          <MenuTrigger isActive={isMenuOpen} onClick={this.triggerMenu} />
        </NavWrapper>
      </Navbar>
    );
  }
}

export { NavContext };
export default Navigation;
