import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";

import Settings from "../config/Settings";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

export default class Body extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "tab1", title: Settings.tab1.title },
      { key: "tab2", title: Settings.tab2.title }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    tab1: Tab1,
    tab2: Tab2
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
