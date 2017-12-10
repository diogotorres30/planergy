import * as types from '../constants/actionTypes';


export function toggleTip(tipId) {
  return {
    type: types.TIP_TOGGLE,
    tipId
  };
}
