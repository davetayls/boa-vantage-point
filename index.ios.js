/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  NavigatorIOS,
  Navigator,
  Component,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {ListScreen} from './containers/ListScreen';
import {rootReducer} from "./reducers/root";
import {getAllVantagePoints} from "./actions/vantagePoint";

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
store.dispatch(getAllVantagePoints());

class BoAVantagePoint extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator
          inititalRoute={{ name: 'Vantage Points' }}
          renderScene={(route, navigator) =>
            <ListScreen />
          }
        />
      </Provider>
    );
  }

}

AppRegistry.registerComponent('BoAVantagePoint', () => BoAVantagePoint);

