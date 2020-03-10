import React, { useContext } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContext';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const Navbar: React.FC<RouteComponentProps> = ({ location, history }) => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Menu stackable>
        <Menu.Item>
          <img src={logo} alt="Dieform logo" />
        </Menu.Item>
        <Menu.Item
          active={location.pathname === '/'}
          name="customers"
          onClick={() => history.push('/')}
        >
          Customers
        </Menu.Item>
        <Menu.Item
          active={location.pathname === '/parts'}
          name="parts"
          onClick={() => history.push('/parts')}
        >
          Parts
        </Menu.Item>
        <Menu.Item
          active={location.pathname === '/tools'}
          name="tools"
          onClick={() => history.push('/tools')}
        ></Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary onClick={logout}>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default withRouter(Navbar);
