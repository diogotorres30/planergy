import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Navbar = ({sidebarToggle}) => (
  <AppBar
    title="Planergy"
    onLeftIconButtonTouchTap={sidebarToggle}
    style={{position: 'fixed', width: '75vh'}}
  />
);

Navbar.propTypes = {
    sidebarToggle: PropTypes.func.isRequired,
};

export default Navbar;