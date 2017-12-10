import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import tips from './tipsReducer';
import rooms from './roomsReducer';
import appliances from './appliancesReducer';
import estimations from './estimationsReducer';
import consumptions from './consumptionsReducer';
import appState from './appStateReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  tips,
  appliances,
  rooms,
  estimations,
  consumptions,
  appState,
  routing: routerReducer
});

export default rootReducer;
