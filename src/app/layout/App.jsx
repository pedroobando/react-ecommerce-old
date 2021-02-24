import React from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/pages/home/HomePage';

const App = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="app">
      <Sidebar.Pushable as={React.Fragment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          // inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin">
          <Menu.Item header>
            <img src="/assets/images/logo.png" alt="logo" style={{ width: '125px' }} />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="product hunt" />
            Products
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="address book" />
            About
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="ald" />
            Contact
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher as={React.Fragment} dimmed={visible}>
          <HomePage Navbar={NavBar({ setVisible })} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default App;
