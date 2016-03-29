
import React, {Component, Image, MapView, StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";

export class AllPointsMapComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 51.346965,
        longitude: -2.250980,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
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
          region={this.state.region}
          scrollEnabled={true}
          showsUserLocation={true}
          followUserLocation={false}
          annotations={this.getAnnotations()}
          onRegionChange={this.onRegionChanged.bind(this)}
        />
      </View>
    )
  }

  getAnnotations() {
    return this.props.vantagePoints.map((vantagePoint) => {
      return {
        title: vantagePoint.title,
        latitude: vantagePoint.latitude,
        longitude: vantagePoint.longitude,
        animateDrop: true,
        leftCalloutView: (
          <TouchableOpacity
            onPress={() => {
              this.props.onVantagePointPress(vantagePoint.id);
            }}
            >
            <Image style={styles.calloutImage}
                   source={vantagePoint.image} />
          </TouchableOpacity>
        )
      };
    });
  }

  onRegionChanged(region) {
    // console.log(region);
    // this.setState({
    //   region: region
    // });
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  map: {
    flex: 1
  },
  calloutImage: {
    width: 60,
    height: 60
  }
});
