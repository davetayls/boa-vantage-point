
import * as actionTypes from '../constants/actionTypes';

export function selectTab(tabId) {
  return {
    type: actionTypes.SELECT_TAB,
    tabId: tabId
  }
}
