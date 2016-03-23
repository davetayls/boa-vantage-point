
import {connect} from 'react-redux';
import {VantagePointComponent} from '../components/VantagePointComponent';
import {showVantagePointMap} from "../actions/vantagePoint";

function mapStateToVantagePointDisplayProps(state, ownProps) {
  const currentId = ownProps.vantagePointId;
  const vantagePoint = state.get('vantagePoints').find(p => p.id === currentId);
  return {
    vantagePointId: currentId,
    vantagePoint: vantagePoint
  }
}

function mapDispatchToVantagePointDisplayProps(dispatch) {
  return {
    onMapPress: (vantagePointId) => {
      dispatch(showVantagePointMap(vantagePointId));
    }
  }
}

export const VantagePointScreen = connect(
  mapStateToVantagePointDisplayProps,
  mapDispatchToVantagePointDisplayProps
)(VantagePointComponent);
