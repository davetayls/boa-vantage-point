
import {Map,List} from 'immutable';
import * as actionTypes from '../constants/actionTypes';
import {vantagePointData} from '../data/vantagePoints';
import {TAB_LIST} from "../constants/tabIds";

const vantagePoints = List(vantagePointData);

const initialState = Map({
  vantagePoints: vantagePoints,
  currentVantagePoint: null,
  mapRequested: false,
  selectedTab: TAB_LIST
});

export function rootReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case actionTypes.SELECT_TAB:
      newState = newState.set('selectedTab', action.tabId);
      break;
    case actionTypes.SET_CURRENT_VANTAGE_POINT:
      newState = state.set('currentVantagePoint', action.vantagePointId);
      newState = newState.set('mapRequested', false);
      newState = newState.set('selectedTab', TAB_LIST);
      break;
    case actionTypes.SHOW_VANTAGE_POINT_MAP:
      newState = newState.set('currentVantagePoint', action.vantagePointId);
      newState = newState.set('mapRequested', true);
      newState = newState.set('selectedTab', TAB_LIST);
      break;
    case actionTypes.HIDE_VANTAGE_POINT_MAP:
      newState = newState.set('mapRequested', false);
      break;
  }
  console.log(newState.toJS());
  return newState;
}

