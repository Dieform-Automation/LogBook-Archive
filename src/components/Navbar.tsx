import React, { useContext } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Menu stackable>
      <Menu.Item>
        <img src={logo} alt="Dieform logo" />
      </Menu.Item>
      <Menu.Item name="customers">Customers</Menu.Item>
      <Menu.Item name="parts">Parts</Menu.Item>
      <Menu.Item name="tools">Tools</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary onClick={logout}>
            Logout
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
