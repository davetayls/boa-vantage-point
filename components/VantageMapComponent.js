
import React, {Component, Image, MapView, StyleSheet, ScrollView, Text, TouchableHighlight, View} from "react-native";

export class VantageMapComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      },
      currentLocation: {
        latitude: null,
        longitude: null
      }
    }
  }
  
  componentDidMount() {
    if (this.props.onDidMount) {
      this.props.onDidMount();
    }
  }

  componentWillUnmount() {
    if (this.props.onWillUnmount) {
      this.props.onWillUnmount();
    }
  }

  render() {
    return (
      <View style={styles.page}>
        <MapView
          style={styles.map}
          mapType="hybrid"
          region={this.getRegion()}
          scrollEnabled={true}
          showsUserLocation={true}
          followUserLocation={false}
          annotations={this.getAnnotations()}
        />
      </View>
    )
  }

  getRegion() {
    return {
      ...this.state.region,
      latitude: this.props.vantagePoint.latitude,
      longitude: this.props.vantagePoint.longitude
    }
  }

  getAnnotations() {
    return [{
      latitude: this.props.vantagePoint.latitude,
      longitude: this.props.vantagePoint.longitude,
      animateDrop: true
    }]
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1
  },
  title: {
    fontWeight: '200',
    fontSize: 22,
    color: '#777',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },
  itemImage: {
    width: 320,
    height: 320
  },
  map: {
    flex: 1
  },
  separator: {
    height: 4,
    backgroundColor: '#eee'
  }
});
