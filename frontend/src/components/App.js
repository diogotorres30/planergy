/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './planergy/Sidebar';
import BottomNav from './planergy/BottomNav';
import Navbar from './planergy/Navbar';
import HomePage from './planergy/HomePage';
import Page1 from './planergy/Page1';
import Page2 from './planergy/Page2';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
	constructor(){
		super();
		this.state  = {
			sidebarOpened: false
		};
	}

	sidebarToggle = () => {
		this.setState({sidebarOpened: !this.state.sidebarOpened});
	}

  render() {
    return (
			<div id="planergy">
				<Navbar sidebarToggle={this.sidebarToggle}/>
				<Sidebar opened={this.state.sidebarOpened} sidebarToggle={this.sidebarToggle}/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/page1" component={Page1} />
					<Route path="/page2" component={Page2} />
					<Route component={NotFoundPage}/>
				</Switch>
				<BottomNav />
			</div>
		);
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
