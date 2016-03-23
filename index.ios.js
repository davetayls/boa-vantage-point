/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {AppRegistry, Component, NavigatorIOS} from "react-native";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/root";
import {getAllVantagePoints} from "./actions/vantagePoint";
import {AppContainer} from "./containers/App";

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
store.dispatch(getAllVantagePoints());

class BoAVantagePoint extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }

}

AppRegistry.registerComponent('BoAVantagePoint', () => BoAVantagePoint);

