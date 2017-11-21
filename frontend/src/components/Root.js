import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
		<MuiThemeProvider>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</MuiThemeProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
