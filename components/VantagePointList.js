
import React, {
  createClass,
  PropTypes,
  Component,
  View,
  Image,
  ListView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

export class VantagePointList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentWillMount() {
    const props = this.props;
    if (props.vantagePoints) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(props.vantagePoints),
        loaded: props.loaded
      });
    }
  }

  componentWillReceiveProps(props) {
    if (props.vantagePoints) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(props.vantagePoints),
        loaded: props.loaded
      });
    }
  }

  render() {
    return (
      <View style={styles.page}>
        <StatusBar />
        <ListView
          contentContainerStyle={styles.listContainer}
          dataSource={this.state.dataSource}
          renderRow={this.renderVantagePoint.bind(this)}
        />
      </View>
    );
  }

  renderVantagePoint(vantagePoint) {
    return (
      <TouchableHighlight onPress={() => this.props.onVantagePointPress(vantagePoint.id)}>
        <View key={vantagePoint.id} style={styles.vantagePoint}>
          <Image source={vantagePoint.image} style={styles.itemImage}/>
          <Text>vantagePoint.title</Text>
        </View>
      </TouchableHighlight>
    );
  }

};

const itemWidth = 150;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 20
  },
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    flexWrap: 'wrap'
  },
  listContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  vantagePoint: {
    margin: 5,
    width: itemWidth,
    height: 200
  },
  itemImage: {
    width: itemWidth,
    height: itemWidth
  }
});
