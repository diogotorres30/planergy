// import objectAssign from 'object-assign';
import {LOGIN_TOGGLE} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function appStateReducer(state = initialState.appState, action) {

  switch (action.type) {
    case LOGIN_TOGGLE:
        return {loggedIn: !state.loggedIn}; 
        
    default:
      return state;
  }
}