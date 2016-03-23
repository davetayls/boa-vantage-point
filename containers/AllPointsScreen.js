
import React, {Component,NavigatorIOS} from 'react-native';
import {connect} from 'react-redux';
import {AllPointsMapComponent} from "../components/AllPointsMapComponent";
import {setCurrentVantagePoint} from "../actions/vantagePoint";

const mapStateToAppProps = (state) => {
  return {
    vantagePoints: state.get('vantagePoints').toJS()
  }
};

const mapDispatchToAppProps = (dispatch, props) => {
  return {
    onVantagePointPress(id) {
      dispatch(setCurrentVantagePoint(id));
    }
  }
};

export const AllPointsScreen = connect(mapStateToAppProps,mapDispatchToAppProps)(AllPointsMapComponent);
