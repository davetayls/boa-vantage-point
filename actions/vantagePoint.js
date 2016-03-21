
import * as actionTypes from '../constants/actionTypes';

export function getAllVantagePoints() {
  return {
    type: actionTypes.GET_ALL_VANTAGE_POINTS
  };
}

export function setCurrentVantagePoint(vantagePointId) {
  return {
    type: actionTypes.SET_CURRENT_VANTAGE_POINT,
    vantagePointId: vantagePointId
  }
}
