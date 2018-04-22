import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = ({ location }) => (
  <Menu tabular>
    <Menu.Item active={location && location.pathname && location.pathname === '/'} as={Link} name="Home" to="/">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item active={location && location.pathname && location.pathname === '/company'} as={Link} name="Company" to="/company">
      <Icon name="industry" />
      Company
    </Menu.Item>
  </Menu>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Header);
