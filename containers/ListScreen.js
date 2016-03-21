
import {connect} from 'react-redux';
import {VantagePointList} from '../components/VantagePointList';
import {setCurrentVantagePoint} from "../actions/vantagePoint";

function mapStateToListScreenProps(state) {
  return {
    loaded: true,
    vantagePoints: state.get('vantagePoints').toJS()
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onVantagePointPress: (id) => {
      dispatch(setCurrentVantagePoint(id));
    }
  }
}

export const ListScreen = connect(
  mapStateToListScreenProps,
  mapDispatchToProps
)(VantagePointList);
