
import * as actionTypes from '../constants/actionTypes';
import {TAB_LIST} from "../constants/tabIds";

export function getAllVantagePoints() {
  return {
    type: actionTypes.GET_ALL_VANTAGE_POINTS
  };
}

export function setCurrentVantagePoint(vantagePointId, tabId = TAB_LIST) {
  return {
    type: actionTypes.SET_CURRENT_VANTAGE_POINT,
    vantagePointId: vantagePointId,
    tabId: tabId
  }
}

export function showVantagePointMap(vantagePointId, tabId = TAB_LIST) {
  return {
    type: actionTypes.SHOW_VANTAGE_POINT_MAP,
    vantagePointId: vantagePointId,
    tabId: tabId
  }
}

export function hideVantagePointMap(tabId = TAB_LIST) {
  return {
    type: actionTypes.HIDE_VANTAGE_POINT_MAP,
    tabId: tabId
  }
}
