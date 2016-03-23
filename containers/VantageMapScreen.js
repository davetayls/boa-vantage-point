
import {connect} from 'react-redux';
import {VantageMapComponent} from '../components/VantageMapComponent';

function mapStateToVantageMapDisplayProps(state, ownProps) {
  const currentId = ownProps.vantagePointId;
  const vantagePoint = state.get('vantagePoints').find(p => p.id === currentId);
  return {
    vantagePointId: currentId,
    vantagePoint: vantagePoint
  }
}

function mapDispatchToVantageMapDisplayProps(dispatch) {
  return {}
}

export const VantageMapScreen = connect(
  mapStateToVantageMapDisplayProps,
  mapDispatchToVantageMapDisplayProps
)(VantageMapComponent);
