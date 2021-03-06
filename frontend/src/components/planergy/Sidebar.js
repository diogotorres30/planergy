/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';

const Sidebar = ({opened, sidebarToggle, toggleLogin}) => {
	
	const style = {color: 'black'};	
	return (
		<div id="sidebar">
			<Drawer
				docked={false}
				width={200}
				open={opened}
				onRequestChange={() => sidebarToggle()}
				containerStyle={{top: '64px', bottom: '35px', backgroundColor: '#c32738'}}
			>
                <NavLink exact to="/" style={style} onClick={sidebarToggle}>
					<MenuItem>Home</MenuItem>				
				</NavLink>
                <NavLink to="/consumptions" style={style} onClick={sidebarToggle}>
					<MenuItem>Consumptions</MenuItem>				
				</NavLink>			
                <NavLink to="/estimations" style={style} onClick={sidebarToggle}>
					<MenuItem>Estimations</MenuItem>				
				</NavLink>	
                <NavLink to="/tips" style={style} onClick={sidebarToggle}>
					<MenuItem>Tips</MenuItem>				
				</NavLink>
                <NavLink to="/settings" style={style} onClick={sidebarToggle}>
					<MenuItem>Settings</MenuItem>				
				</NavLink>				
				<Link to="/" style={style} onClick={sidebarToggle}>
					<MenuItem  
						style={{textDecoration: 'underline'}}onClick={() => {			
							localStorage.removeItem('loggedIn');
							toggleLogin();
						}}>
						Log out
					</MenuItem>				
				</Link>			
                <NavLink to="/help" style={style} onClick={sidebarToggle}>
					<MenuItem>Help</MenuItem>				
				</NavLink>																				
			</Drawer>
		</div>
	);
};

Sidebar.propTypes = {
	opened: PropTypes.bool.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
};

export default Sidebar;
