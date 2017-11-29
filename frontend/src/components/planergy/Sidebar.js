/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';

const Sidebar = ({opened, sidebarToggle}) => {

	const activeStyle = { color: 'blue' };		
	return (
		<div>
			<Drawer
				docked={false}
				width={200}
				open={opened}
				onRequestChange={() => sidebarToggle()}
				containerStyle={{top: '64px', bottom: '35px'}}
			>
				<MenuItem>
					<NavLink to="/" activeStyle={activeStyle} onClick={sidebarToggle}>Home</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/page1" activeStyle={activeStyle} onClick={sidebarToggle}>Page1</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/page2" activeStyle={activeStyle} onClick={sidebarToggle}>Page2</NavLink>					
				</MenuItem>
				<MenuItem>
					<NavLink to="/tips" activeStyle={activeStyle} onClick={sidebarToggle}>Tips</NavLink>					
				</MenuItem>				
			</Drawer>
		</div>
	);
};

Sidebar.propTypes = {
	opened: PropTypes.bool.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
};

export default Sidebar;
