/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';

const Sidebar = ({opened, sidebarToggle}) => {

	const activeStyle = { color: 'white' };		
	return (
		<div>
			<Drawer
				docked={false}
				width={200}
				open={opened}
				onRequestChange={() => sidebarToggle()}
				containerStyle={{top: '64px', bottom: '35px', backgroundColor: '#c32738'}}
			>
				<MenuItem>
					<FlatButton href="/" labelStyle={{color: 'white'}} label="Consumptions" onClick={sidebarToggle}/>
					<div style={{background: '#000000', borderBottom: '1px solid white', overflow: 'hidden'}}/>
				</MenuItem>
				<MenuItem>
					<FlatButton href="/page1" labelStyle={{color: 'white'}} label="Estimations" onClick={sidebarToggle}/>
					<div style={{background: '#000000', borderBottom: '1px solid white', overflow: 'hidden'}}/>
				</MenuItem>
				<MenuItem>
					<FlatButton href="/page2" labelStyle={{color: 'white'}} label="Kitchen" onClick={sidebarToggle}/>
					<div style={{background: '#000000', borderBottom: '1px solid white', overflow: 'hidden'}}/>
				</MenuItem>
				<MenuItem>		
					<FlatButton href="/tips" labelStyle={{color: 'white'}} label="tips" onClick={sidebarToggle}/>
					<div style={{background: '#000000', borderBottom: '1px solid white', overflow: 'hidden'}}/>	
				</MenuItem>
				<MenuItem>
					<FlatButton href="/" labelStyle={{color: 'white'}} label="Help" onClick={sidebarToggle}/>
					<div style={{background: '#000000', borderBottom: '1px solid white', overflow: 'hidden'}}/>			
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
