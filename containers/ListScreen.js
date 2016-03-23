
import {Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {VantagePointList} from '../components/VantagePointList';
import {setCurrentVantagePoint} from "../actions/vantagePoint";

const mapStateToProps = (state) => {
  return {
    loaded: true,
    cellSize: Dimensions.get('window').width / 2,
    vantagePoints: state.get('vantagePoints').toJS()
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVantagePointPress: (id) => {
      dispatch(setCurrentVantagePoint(id));
    }
  }
};

export const ListScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(VantagePointList);
