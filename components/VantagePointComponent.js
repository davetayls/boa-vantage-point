
import React, {Component, Dimensions, Image, MapView, StyleSheet, ScrollView, Text, TouchableHighlight, View} from "react-native";

export class VantagePointComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSize: Dimensions.get('window').width,
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
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({...this.state, ...{ currentLocation: position }})
      },
      (err) => {
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

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
    let imageSizingStyle = {
      width: this.state.imageSize,
      height: this.state.imageSize
    };
    return (
      <ScrollView style={styles.page}>
        <View style={styles.imageContainer}>
          <Image source={this.props.vantagePoint.image} style={[styles.itemImage,imageSizingStyle]}/>
        </View>
        <View style={styles.separator} />
        <Text style={styles.title}>{this.props.vantagePoint.title}</Text>
        <Text style={styles.description}>{this.props.vantagePoint.description}</Text>
        <View style={styles.separator} />
        <TouchableHighlight underlayColor="#efefef" onPress={() => this.props.onMapPress(this.props.vantagePointId)}>
          <View style={styles.mapCTA}>
            <MapView
              style={styles.map}
              region={this.getRegion()}
              scrollEnabled={false}
              showsUserLocation={true}
              followUserLocation={false}
              annotations={this.getAnnotations()}
            />
            <Text style={styles.mapCTALabel}>View on a map &gt;</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </ScrollView>
    )
  }

  getRegion() {
    return {
      ...this.state.region,
      latitude: this.props.vantagePoint.latitude,
      longitude: this.props.vantagePoint.longitude,
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
    fontSize: 24,
    color: '#777',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  description: {
    fontWeight: '200',
    fontSize: 18,
    color: '#444',
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  itemImage: {
    flex: 1
    // width: 320,
    // height: 320
  },
  mapCTA: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  map: {
    width: 180,
    height: 180,
    marginRight: 10
  },
  mapCTALabel: {
    color: '#777',
    fontSize: 16,
    fontWeight: '200'
  },
  separator: {
    height: 4,
    backgroundColor: '#eee'
  }
});
