import React, { useState } from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import { createMedia } from '@artsy/fresnel';
import './navbar.css';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
  },
});

const NavBar = ({ setVisible }) => {
  const nameIconCart = 'shopping bag';
  // const [visible, setVisible] = useState(false);

  const DesktopMenu = () => {
    return (
      <Menu text className="desktopmenu">
        <Menu.Item header>
          <img src="/assets/images/logo.png" alt="logo" style={{ width: '125px' }} />
        </Menu.Item>
        <Menu.Item name="Home" position="right" />
        <Menu.Item name="Products" />
        <Menu.Item name="About" />
        <Menu.Item name="Contact" />
        <Menu.Item name="Account" />
        <Menu.Item>
          <Icon name={nameIconCart} size="large" />
        </Menu.Item>
      </Menu>
    );
  };

  const MobileMenu = () => {
    return (
      <Menu text className="mobilemenu">
        <Menu.Item header>
          <img src="/assets/images/logo.png" alt="logo" style={{ width: '125px' }} />
        </Menu.Item>

        <Menu.Item position="right">
          <Icon name={nameIconCart} size="large" />
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => setVisible(true)}>
            <Icon name="bars" size="large" />
          </a>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <Container fluid className="topmenu">
      <MediaContextProvider>
        <Media at="sm">{MobileMenu()}</Media>
        <Media at="md">{MobileMenu()}</Media>
        <Media at="lg">{DesktopMenu()}</Media>
      </MediaContextProvider>
    </Container>
  );
};

export default NavBar;
