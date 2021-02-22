import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import './navbar.css';

const NavBar = () => {
  return (
    <Container fluid className="topmenu">
      <Menu text stackable>
        <Menu.Item header>
          <img src="/assets/images/logo.png" alt="logo" style={{ width: '125px' }} />
        </Menu.Item>
        <Menu.Item name="Home" position="right" />
        <Menu.Item name="Products" />
        <Menu.Item name="About" />
        <Menu.Item name="Contact" />
        <Menu.Item name="Account" />

        <Menu.Item>
          <img
            src="/assets/images/cart.png"
            alt="cart"
            style={{ width: '30px', height: '25px' }}
          />
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default NavBar;
