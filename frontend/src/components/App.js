/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './planergy/Sidebar';
//import BottomNav from './planergy/BottomNav';
import Navbar from './planergy/Navbar';
// import RoomConsumptions from './planergy/RoomConsumptions';
// import Page1 from './planergy/Page1';
// import Page2 from './planergy/Page2';
import Tips from './planergy/Tips';
import Estimations from './planergy/Estimations';
import Consumptions from './planergy/Consumptions';
import Settings from './planergy/Settings';
import Login from './planergy/Login';
// import RoomTips from './planergy/RoomTips';
import RoomDetail from '../containers/RoomDetail';
import NotFoundPage from './NotFoundPage';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/appStateActions';
import { withRouter } from 'react-router'
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
	constructor(props){
		super(props);
		this.state  = {
			sidebarOpened: false
		};
	}

	toggleLoginUpdate = () => {
		this.props.actions.toggleLogin();
		this.setState({});
	}

	sidebarToggle = () => {
		this.setState({sidebarOpened: !this.state.sidebarOpened});
	}
//toggleLogin
  render() {

	const {loggedIn} = this.props.appState;
	const {toggleLogin} = this.props.actions;

	if(!loggedIn && localStorage.getItem('loggedIn') === "true"){
		toggleLogin();
		return null;
	} 
    return (
			<div id="planergy">
				<Navbar sidebarToggle={this.sidebarToggle} showIcon={loggedIn}/>
				<Sidebar opened={this.state.sidebarOpened} sidebarToggle={this.sidebarToggle} toggleLogin={toggleLogin}/>
				<div style={{paddingTop: '64px', paddingBottom: '60px'}}>
				{loggedIn ? (
					<Switch>
						<Route exact path="/" component={RoomDetail} />
						<Route path="/rooms/:room" component={(props) => (<RoomDetail {...props}/>) } />						
						<Route path="/tips" component={Tips} />
						<Route path="/consumptions" component={Consumptions} />
						<Route path="/estimations" component={Estimations} />
						<Route path="/settings" component={Settings} />
						<Route component={NotFoundPage}/>
					</Switch>
				) : (<Login toggleLogin={toggleLogin}/>)}				
				</div>
			
			</div>
		);
  }
}

App.propTypes = {
  children: PropTypes.element
};


function mapStateToProps(state) {
    const{
        appState
    } = state;
    
    return {
        appState     
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(App));