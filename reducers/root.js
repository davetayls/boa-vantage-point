
import {Map,List} from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const vantagePoints = List([
  {
    id: 1,
    title: 'View from ...',
    image: require('../images/example.jpg')
  },
  {
    id: 2,
    title: 'View from ...',
    image: require('../images/example.jpg')
  },
  {
    id: 3,
    title: 'View from ...',
    image: require('../images/example.jpg')
  },
  {
    id: 4,
    title: 'View from ...',
    image: require('../images/example.jpg')
  },
  {
    id: 5,
    title: 'View from ...',
    image: require('../images/example.jpg')
  },
  {
    id: 6,
    title: 'View from ...',
    image: require('../images/example.jpg')
  },
  {
    id: 7,
    title: 'View from ...',
    image: require('../images/example.jpg')
  }
]);

const initialState = Map({
  vantagePoints: vantagePoints,
  currentVantagePoint: null
});

export function rootReducer(state = initialState, action) {
  let newState = state;
  debugger;
  switch (action.type) {
    case actionTypes.SET_CURRENT_VANTAGE_POINT:
      newState = state.set('currentVantagePoint', action.vantagePointId);
      break;
  }
  console.log(newState.toJS());
  return newState;
}

