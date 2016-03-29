
import React, {Component,NavigatorIOS} from 'react-native';
import {connect} from 'react-redux';
import * as routeIds from '../constants/routeIds';
import {hideVantagePointMap} from "../actions/vantagePoint";
import {setCurrentVantagePoint} from "../actions/vantagePoint";
import {TabNavigatorComponent} from "../components/TabNavigatorComponent";

export class ListTabNavigatorComponent extends TabNavigatorComponent {

  constructor(props) {
    super(props);
    this.state.routeName = routeIds.LIST;
    this.state.presses = 1;
  }

}

const mapStateToAppProps = (state) => {
  const currentVantagePointId = state.get('currentVantagePoint');
  const vantagePoint = currentVantagePointId ? state.get('vantagePoints').find(p => p.id === currentVantagePointId) : null;
  return {
    defaultRouteId: routeIds.LIST,
    currentVantagePoint: currentVantagePointId,
    vantagePointTitle: vantagePoint ? vantagePoint.title : '',
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

export const ListTabNavigator = connect(mapStateToAppProps,mapDispatchToAppProps)(ListTabNavigatorComponent);
