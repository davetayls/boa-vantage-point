import React, {Component, Navigator, NavigatorIOS, TabBarIOS} from "react-native";
import {connect} from "react-redux";
import {TabBarItemIOS} from "react-native-vector-icons/FontAwesome";
import {ListTabNavigator} from "./ListTabNavigator";
import {MapTabNavigator} from "./MapTabNavigator";
import {TAB_LIST, TAB_MAP} from "../constants/tabIds";
import {selectTab} from "../actions/appActions";

export class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listPresses: 1,
      mapPresses: 0
    };
  }

  tabSelected(tabId) {
    let currentState = {...this.state};
    switch (tabId) {
      case TAB_LIST:
        currentState.listPresses += 1;
        break;
      case TAB_MAP:
        currentState.mapPresses += 1;
        break;
    }
    this.props.onTabSelected(tabId);
    this.setState(currentState);
  }

  render() {
    return (
      <TabBarIOS tintColor="black" barTintColor="#eee">
        <TabBarItemIOS
          iconName="th-large"
          title="List"
          selected={this.props.selectedTab === TAB_LIST}
          onPress={() => {
            this.tabSelected(TAB_LIST);
          }}
        >
          <ListTabNavigator presses={this.state.listPresses} />
        </TabBarItemIOS>
        <TabBarItemIOS
          iconName="map-o"
          title="Map"
          selected={this.props.selectedTab === TAB_MAP}
          onPress={() => {
            this.tabSelected(TAB_MAP);
          }}
        >
          <MapTabNavigator presses={this.state.mapPresses} />
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }

}

const mapStateToAppProps = (state) => {
  return {
    selectedTab: state.get('selectedTab')
  }
};

const mapDispatchToAppProps = (dispatch, props) => {
  return {
    onTabSelected: (tabId) => {
      dispatch(selectTab(tabId));
    }
  }
};

export const AppContainer = connect(mapStateToAppProps,mapDispatchToAppProps)(AppComponent);

