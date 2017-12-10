import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import tips from './tipsReducer';
import rooms from './roomsReducer';
import appliances from './appliancesReducer';
import estimations from './estimationsReducer';
import consumptions from './consumptionsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  tips,
  appliances,
  rooms,
  estimations,
  consumptions,
  routing: routerReducer
});

export default rootReducer;
