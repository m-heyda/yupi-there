import React, { Component } from 'react';
import Menu from './Menu';
import MenuTrigger from './MenuTrigger';
import { Navbar, NavWrapper, LogoWrapper } from './Navigation.style';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    }
  }

  triggerMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <Navbar>
        <NavWrapper>
          <LogoWrapper>Yupi-There</LogoWrapper>
          <Menu isActive={isMenuOpen} />
          <MenuTrigger
            isActive={isMenuOpen}
            onClick={this.triggerMenu}
          />
        </NavWrapper>
      </Navbar>
    );
  }
}

export default Navigation;