
import React, {Component,NavigatorIOS} from 'react-native';
import * as routeIds from '../constants/routeIds';
import {ListScreen} from "../containers/ListScreen";
import {VantagePointScreen} from "../containers/VantagePointScreen";
import {VantageMapScreen} from "../containers/VantageMapScreen";
import {AllPointsScreen} from "../containers/AllPointsScreen";

export class TabNavigatorComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routeName: props.defaultRouteId,
      presses: 0
    };
  }

  componentWillReceiveProps(props) {
    console.log('app props received', props);
    const currentState = {
      routeName: this.props.defaultRouteId
    };
    if (props.presses > this.state.presses) {
      this.refs.navigator.pop();
    } else {
      let newRouteId = this.getRouteFromProps(props);
      if (newRouteId) currentState.routeName = newRouteId;
    }
    currentState.presses = props.presses;
    this.setState(currentState);
  }

  getRouteFromProps(props) {
    if (props.currentVantagePoint) {
      if (props.mapRequested) {
        return routeIds.MAP;
      } else {
        return routeIds.VANTAGE_POINT;
      }
    }
  }

  componentDidUpdate(props, state) {
    console.log('app state update', this.state);
    const currentRoute = this.getCurrentNavigatorRoute();
    const nextRoute = this.getRoute();
    if (currentRoute.id !== nextRoute.id) {
      this.refs.navigator.push(this.getRoute());
    }
  }

  getCurrentNavigatorRoute() {
    if (this.refs.navigator) {
      const routeStack = this.refs.navigator.state.routeStack;
      const progress = this.refs.navigator.state.requestedTopOfStack;
      return routeStack[progress];
    } else {
      return this.getRoute(routeIds.LIST);
    }
  }

  getRoute(routeName = this.state.routeName) {
    let route = {
      id: routeName || routeIds.LIST,
      title: 'Vantage Points',
      component: ListScreen,
      passProps: {
        onDidMount: this.screenMounted.bind(this),
        onWillUnmount: this.screenMounted.bind(this)
      }
    };
    switch (routeName) {
      case routeIds.ALL_POINTS:
        route.title = 'All Points';
        route.component = AllPointsScreen;
        break;
      case routeIds.VANTAGE_POINT:
        route.title = 'Point';
        route.component = VantagePointScreen;
        route.passProps.vantagePointId = this.props.currentVantagePoint;
        break;
      case routeIds.MAP:
        route.title = 'Map';
        route.component = VantageMapScreen;
        route.passProps.vantagePointId = this.props.currentVantagePoint;
        break;
    }
    return route;
  }

  goBack() {
    this.refs.navigator.jumpBack();
  }

  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        ref="navigator"
        initialRoute={this.getRoute()}
      />
    );
  }

  screenMounted() {
    if (this.refs.navigator) {
      const route = this.getCurrentNavigatorRoute();
      this.props.onRouteChanged(route.id);
    }
  }

}
