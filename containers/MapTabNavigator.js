
import React, {Component,NavigatorIOS} from 'react-native';
import {connect} from 'react-redux';
import * as routeIds from '../constants/routeIds';
import {hideVantagePointMap} from "../actions/vantagePoint";
import {setCurrentVantagePoint} from "../actions/vantagePoint";
import {TabNavigatorComponent} from "../components/TabNavigatorComponent";

export class MapTabNavigatorComponent extends TabNavigatorComponent {

  constructor(props) {
    super(props);
    this.state.routeName = routeIds.ALL_POINTS;
  }

  getRouteFromProps(props) {
    return routeIds.ALL_POINTS;
  }
}

const mapStateToAppProps = (state) => {
  return {
    defaultRouteId: routeIds.ALL_POINTS,
    currentVantagePoint: state.get('currentVantagePoint'),
    mapRequested: state.get('mapRequested')
  }
};

const mapDispatchToAppProps = (dispatch, props) => {
  return {
    onRouteChanged: (routeId) => {
      switch (routeId) {
        case routeIds.LIST:
          dispatch(setCurrentVantagePoint(null));
        case routeIds.VANTAGE_POINT:
          dispatch(hideVantagePointMap());
      }
    }
  }
};

export const MapTabNavigator = connect(mapStateToAppProps,mapDispatchToAppProps)(MapTabNavigatorComponent);
