
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
  TouchableWithoutFeedback,
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

  componentDidMount() {
    if (this.props.onDidMount) {
      this.props.onDidMount();
    }
  }

  render() {
    return (
      <View style={styles.page}>
        <ListView
          contentContainerStyle={styles.listContainer}
          dataSource={this.state.dataSource}
          renderRow={this.renderVantagePoint.bind(this)}
        />
      </View>
    );
  }

  renderVantagePoint(vantagePoint) {
    let imageSize = this.props.cellSize - 10;
    let imageStyle = {
      width: imageSize,
      height: imageSize
    };
    let vantagePointStyle = {
      margin: 5,
      width: imageSize,
      height: imageSize + 15
    };
    return (
      <TouchableWithoutFeedback underlayColor="#efefef" onPress={() => this.props.onVantagePointPress(vantagePoint.id)}>
        <View key={vantagePoint.id} style={vantagePointStyle}>
          <Image source={vantagePoint.image} style={imageStyle}/>
          <Text numberOfLines={1} style={styles.title}>{vantagePoint.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

};

const itemWidth = 150;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // marginTop: 20
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
  },
  title: {
    color: '#555',
    fontSize: 10,
    paddingTop: 5
  }
});
